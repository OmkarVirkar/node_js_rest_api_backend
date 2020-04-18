var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.send("<h1 style='text-align:center'>Welcome to Node Js backend</h1>");
});

module.exports = router;
