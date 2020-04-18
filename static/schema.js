const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  age: {
    type: Number,
  },
});

exports.userSchema = mongoose.model("sales_users", userSchema);
