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
router.post("/removeUserData/", (req, res, next) => {
  var { primaryid } = req.body;

  collName
    .deleteOne({
      _id: primaryid,
    })
    .exec((err, leads) => {
      if (err) {
        res.send(generateResponseSchema(FailedCode, [], err));
      }
      res.send(generateResponseSchema(SuccessCode, leads));
    });
});

module.exports = router;
