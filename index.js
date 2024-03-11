const express = require("express");
const app = express();


require('dotenv').config()
const postmark = process.env.POSTMARK;

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;