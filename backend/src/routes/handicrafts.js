require('dotenv').config()
const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const jwt = require("jsonwebtoken")

module.exports = router;