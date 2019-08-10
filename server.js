const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const redirect = require("express-redirect");
redirect(app);
var router = express.Router();
var bodyParser = require("body-parser");
var server = require("http").createServer(app);

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});
app.get("/new", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "new.html"));
});

app.use(router);
require("./routes/admin/testtxn")(app);
require("./routes/admin/pgredirect")(app);
require("./routes/admin/response")(app);
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
