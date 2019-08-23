var checksum = require("../../model/checksum");
var config = require("../../config/config");
var mongoose = require("mongoose");
var User = require("./user.js");
const connectionString =
  "mongodb+srv://user:Password@cluster1-xenqr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
  useNewUrlParser: true
});
module.exports = function(app) {
  app.post("/response", function(req, res) {
    console.log("in response post");
    var paramlist = req.body;
    var paramarray = new Array();

    console.log(paramlist);
    var id = paramlist.ORDERID;
    User.find({ orderid: id }, function(err, comments) {
      var array = comments;
      if (checksum.verifychecksum(paramlist, config.PAYTM_MERCHANT_KEY)) {
        console.log("true");
        res.render("response.ejs", {
          restdata: "true",
          paramlist: paramlist,
          products: array
        });
      } else {
        console.log("false");
        res.render("response.ejs", {
          restdata: "false",
          paramlist: paramlist,
          products: array
        });
      }
    });

    //vidisha
  });
};
