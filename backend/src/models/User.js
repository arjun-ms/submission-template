const { DataTypes } = require('sequelize');
const db = require("../database/database");


const User = db.define('User', {
  // Model attributes are defined here
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  account_balance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
});

module.exports = User;