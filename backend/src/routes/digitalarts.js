require('dotenv').config()
const express = require("express");
const router = express.Router();
const Digitalarts = require('../models/Digitalarts');
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const jwt = require("jsonwebtoken")

router.get('/', (req, res) => {
    return res.status(200).json({ message: "Digital Arts Route Route" });
})

router.post('/create', (req, res) => {
    const art = req.body;

    if (art.token == undefined) {
        return res.status(404).json({ message: "Token Not Provided" });
    }

    if (art.name == undefined || art.description == undefined || art.price == undefined || art.thumbnail == undefined) {
        return res.status(404).json({ message: "All Necessary Art Information Not Provided" });
    }

    jwt.verify(art.token, "thisisanextremelysecrettoken", (err, decoded) => {
        if (!decoded) return res.status(404).json({ message: "Token Invalid" });
        else {
            let data = {
                itemId: crypto.randomBytes(16).toString("hex"),
                name: art.name,
                description: art.description,
                price: art.price,
                thumbnail: art.thumbnail,
                bought: false,
                artist: decoded.userId
            }

            Digitalarts.create(data)
                .then(data => {
                    return res.status(200).json({ data });
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).json({ message: "Unexpected Error on Art Creation" });
                })
        }
    })

})

module.exports = router;