/**
 * Config
 */
const express = require("express");
const db = require("./src/database/database.js")
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

/**
 * Routes
 */
app.get('/', (req, res) => { return res.status(200).json({ message: "Works!" }); })
app.use('/auth', require('./src/routes/auth.js'));
app.use('/handicrafts', require('./src/routes/handicrafts.js'));
app.use('/paintings', require('./src/routes/paintings.js'));
app.use('/digitalarts', require('./src/routes/digitalarts.js'));

app.listen(process.env.PORT || 3000);