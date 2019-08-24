var checksum = require("../../model/checksum");
var config = require("../../config/config");
var randomstring = require("randomstring");
var User = require("./user");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://user:Password@cluster1-xenqr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
  useNewUrlParser: true
});
module.exports = function(app) {
  app.post("/testtxn/:price/:orderid", function(req, res) {
    console.log(req.body.bill);
    req.body.bill.map((item, index) => {
      var product = new User({
        name: item.author,
        price: item.price,
        quantity: item.cartQuantity,
        orderid: req.params.orderid
      });
      product.save(function(err) {
        if (err) throw err;

        console.log("User saved successfully!");
      });
    });
    res.status(200).send({
      error: false
    });
  });
  app.get("/testtxn/:price/:orderid", function(req, res) {
    console.log(req.params.price);
    console.log(req.params.orderid);
    /*var chris = new User({
      name: "kush",
      username: "sevilayha",
      password: "password"
    });
    chris.save(function(err) {
      if (err) throw err;

      console.log("User saved successfully!");
    });*/
    console.log("in restaurant");
    console.log("--------testtxnjs----");
    res.render("testtxn.ejs", {
      config: config,
      price: req.params.price,
      orderid: req.params.orderid
    });
  });

  app.post("/testtxn", function(req, res) {
    console.log("POST Order start");
    var paramlist = req.body;
    var paramarray = new Array();
    console.log(paramlist);
    for (name in paramlist) {
      if (name == "PAYTM_MERCHANT_KEY") {
        var PAYTM_MERCHANT_KEY = paramlist[name];
      } else {
        paramarray[name] = paramlist[name];
      }
    }
    console.log(paramarray);
    paramarray["CALLBACK_URL"] = "http://localhost:8080/response"; // in case if you want to send callback
    console.log(PAYTM_MERCHANT_KEY);
    checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function(err, result) {
      console.log("                       it works                ");
      console.log(result);
      res.render("pgredirect.ejs", { restdata: result });
      console.log("                       it works                ");
    });

    console.log("POST Order end");
  });
  //vidisha
};
