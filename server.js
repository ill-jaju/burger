var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var express = require("express");
var methodOverride = require("method-override");


var port = process.env.PORT || 3000;

var app = express();

app.listen(port);