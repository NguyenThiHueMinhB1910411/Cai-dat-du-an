const express = require("express");
const cors = require("cors");
const { application } = require("express");

const app = express();

app.use(cors());
application.use(express.json());

app.get("/",(req, res) => {
    res.json({message:" Welcome to contact book application."});
});

module.exports = app;