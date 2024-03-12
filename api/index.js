const express = require("express");
const app = express();
const postmark = require("postmark");
require('dotenv').config()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`Hi! Server is listening on port ${port}`)
  });

app.get("/mail", (req, res) => {
    console.log('hiiiiii')
    
// Send an email:
    const client = new postmark.ServerClient(process.env.POSTMARK);
    client.sendEmail({
        "From": "hello@mcbalabanian.io",
        "To": "hello@mcbalabanian.io",
        "Subject": "Test",
        "TextBody": "Hello from Postmark!"
    });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;