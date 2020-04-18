const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const {
  generateResponseSchema,
  SuccessCode,
  FailedCode,
} = require("../../static/responseSchema");
var collName = require("../../static/schema").userSchema;

// This req will increment the age of the sent user id
router.post("/insertUserData/", (req, res, next) => {
  let { name, lastname, age } = req.body;

  var colleaction = new collName(req.body);
  colleaction.save((err, leads) => {
    if (err) {
      console.log(`Error: ${err}`);
      res.send(generateResponseSchema(FailedCode, [], err));
    } else {
      res.send(generateResponseSchema(SuccessCode, leads, err));
    }
  });
});

module.exports = router;
