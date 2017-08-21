var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var express = require("express");
var methodOverride = require("method-override");

var port = process.env.PORT || 8000;

var app = express();

app.use(express.static("public")); // serve static content for the app from the "public" directory in the application directory.

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method")); // override with POST having ?_method=DELETE

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //set handlebars
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js"); // import routes and give the server access to them.

app.use("/", routes);

app.listen(port, function(){ //makes sure app is working
    console.log("app on " + port);
});