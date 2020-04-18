var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const {
  generateResponseSchema,
  SuccessCode,
  FailedCode,
} = require("../../static/responseSchema");
var collName = require("../../static/schema").userSchema;

/* GET find page. */
router.get("/", (req, res, next) => {
  collName
    .find({}, { name: 1, lastname: 1, age: 1, _id: 0 })
    .sort({ age: 1 })
    .exec((err, leads) => {
      if (err) return res.send(generateResponseSchema(FailedCode, [], err));
      res.send(generateResponseSchema(SuccessCode, leads));
    });
});

module.exports = router;
