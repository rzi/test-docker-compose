// Node.js MySQL SELECT FROM query Example
// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "pi.cba.pl", // ip address of server running mysql
  user: "Bazapi2019", // user name to your mysql database
  password: "Bazapi2019", // corresponding password
  database: "elunch" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  con.query("SELECT * FROM pomiary2 LEFT OUTER JOIN pomieszczenie  ON pomiary2.nr_czujnika=pomieszczenie.my_nr_dec ORDER BY pomiary2.id DESC LIMIT 2", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
  });
});
