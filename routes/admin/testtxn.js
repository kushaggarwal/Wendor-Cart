var checksum = require("../../model/checksum");
var config = require("../../config/config");
var randomstring = require("randomstring");

module.exports = function(app) {
  app.get("/testtxn/:price", function(req, res) {
    console.log(req.params.price);
    console.log("in restaurant");
    console.log("--------testtxnjs----");
    res.render("testtxn.ejs", {
      config: config,
      price: req.params.price,
      orderid: randomstring.generate({ length: 50 })
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
    paramarray["CALLBACK_URL"] = "http://www.happytrip.store/response"; // in case if you want to send callback
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
