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
router.post("/increment_age/", (req, res, next) => {
  var indexId = req.body.indexId;

  collName
    .updateOne(
      {
        _id: indexId,
      },
      {
        $inc: {
          age: 1,
        },
      }
    )
    .exec((err, leads) => {
      if (err) {
        res.send(generateResponseSchema(FailedCode, [], err));
      }
      res.send(generateResponseSchema(SuccessCode, leads));
    });
});

module.exports = router;
