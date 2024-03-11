import express from 'express'
const app = express();


const postmark = process.env.POSTMARK;

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = postmark;