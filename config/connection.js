var mysql = require('mysql'); //mysql connnection + config

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MEclass@2003",
    database: "burgers_db"
});

connection.connect(function(err) { //connection
    if (err) {
        console.error("error: " + err.stack);
        return;
    }
    console.log("connected as " + connection.threadId);
});

module.exports = connection //exports connection