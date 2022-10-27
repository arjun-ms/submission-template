require('dotenv').config()
const { Sequelize } = require('sequelize');

const configDB = {
    "sqlite": { dialect: 'sqlite', storage: './database/data.db' },
};

const db = new Sequelize(configDB["sqlite"]);
db.authenticate()
    .then(() => {
        console.log('DB Connected🚀')
        db.sync({force: true})
            .then((result) => {
                console.log("Tables Synced!");
            })
            .catch((error) => {
                console.log("Error: ", error);
            })
    })
    .catch(err => console.log('Error: ', err));

module.exports = db;