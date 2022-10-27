require('dotenv').config()
const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const jwt = require("jsonwebtoken")

/**
 * Functions
 */
function createAccessToken(user) {
    return jwt.sign({ email: user.email }, "thisisanextremelysecrettoken", { expiresIn: '20d' });
}

function populateUser(user) {
    let populated = {
        userId: crypto.randomBytes(16).toString("hex"),
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: user.address,
        points: 0,
        account_balance: 0
    }
    return populated;
}


/**
 * Routes
 */
router.get('/', (req, res) => {
    return res.status(200).json({ message: "Authentication Route" });
})

router.get('/all', (req, res) => {
    User.findAll({ attributes: { exclude: ['password'] } })
        .then((data) => {
            return res.status(200).json({ data });
        })
        .catch((err) => {
            return res.status(500).json({ message: "Unexpected Error on User Fetch" });
        })
})

router.post('/login', (req, res) => {
    const user = req.body;

    if (user.email == undefined || user.password == undefined) {
        return res.status(404).json({ message: "All Necessary User Information Not Provided" });
    }

    User.findOne({ where: { email: user.email } })
        .then(data => {
            if (data === null) return res.status(404).json({ message: "User Do Not Exists" });
            let userData = data.dataValues;
            bcrypt.compare(user.password, userData.password).then(function (isMatch) {
                if (!isMatch) return res.status(403).json({ message: "Password Not Verified" });
                let accessToken = createAccessToken(userData);
                return res.status(200).json({ accessToken, userData });
            }).catch(err => {
                return res.status(500).json({ message: "Unexpected Error on Decryption" });
            })
        })
        .catch(err => {
            return res.status(500).json({ message: "Unexpected Error on Reading from Database" });
        })
})

router.post('/signup', (req, res) => {
    const user = req.body;

    if (user.email == undefined || user.password == undefined || user.name == undefined || user.phone==undefined || user.address==undefined) {
        return res.status(404).json({ message: "All Necessary User Information Not Provided" });
    }

    User.count({ where: { email: user.email } })
        .then(count => {
            if (count != 0) return res.status(409).json({ message: "User Already Exists" });

            bcrypt.hash(user.password, 8).then(function (hash) {
                user.password = hash;
                let fullUser = populateUser(user);
                User.create(fullUser)
                    .then(data => {
                        let userData = data.dataValues;
                        let accessToken = createAccessToken(userData);
                        return res.status(200).json({ accessToken, userData });
                    })
                    .catch(err => {
                        console.log(err);
                        return res.status(500).json({ message: "Unexpected Error on User Creation" });
                    })
            }).catch(err => {
                return res.status(500).json({ message: "Unexpected Error on Encryption" });
            })
        })
        .catch(err => {
            return res.status(500).json({ message: "Unexpected Error on Reading from Database" });
        })

})

module.exports = router;