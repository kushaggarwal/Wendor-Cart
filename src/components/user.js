"use strict";

var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: { type: String },
  orderid: { type: String },
  price: { type: Number },
  quantity: { type: Number }
});
var User = mongoose.model("User", userSchema);

module.exports = User;
