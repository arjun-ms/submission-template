const { DataTypes } = require('sequelize');
const db = require("../database/database")

const Digitalarts = db.define('Digitalarts', {
  // Model attributes are defined here
  itemId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  thumbnail: {
    type: DataTypes.BLOB('long'),
    allowNull: false
  },
  bought: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  artist: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Digitalarts