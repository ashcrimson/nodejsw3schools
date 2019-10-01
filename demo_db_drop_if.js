var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    /*Delete the "Customers" table, but only if it already exists (to avoid errors) */
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});