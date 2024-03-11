import app from '../index';

const postmark = require("postmark");


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

module.exports = app;
