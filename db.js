var mysql = require('mysql');

var con = mysql.createConnection({
  	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "node_db"
});

module.exports = con;