var express = require('express');
var router = express.Router();

// Node.js MySQL SELECT FROM query Example
// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "mysql.ct8.pl", // ip address of server running mysql
  user: "m12289_pi", // user name to your mysql database
  password: "Bazapi2019", // corresponding password
  database: "m12289_pi" // use the specified database
});
 
// make to connection to the database.
 //con.connect(function(err) {
 //  if (err) throw err;
//   // if connection is successful
//   con.query("SELECT * FROM spl_users ", function (err, result, fields) {
//   // con.query("SELECT * FROM spl_users", function (err, result, fields) {
//     // if any error while executing above query, throw error
//    // if (err) throw err;
//     // if there is no error, you have the result
//     //console.log(req.body.id);
//     console.log(result);
//   });
/// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  console.log(req.body.id);
  console.log(req.body.imie);
  console.log(req.body.nazwisko);
  var id = req.body.id;
  var myid, myname, mysurname;

  if (id)  {
    //con.query("SELECT * FROM spl_users WHERE id = ?", [id], function (err, result, fields) {
     // make to connection to the database.
    con.connect(function(err) {
      if (err) throw err;
       // if connection is successful
      con.query("SELECT * FROM spl_users ", function (err, result, fields) {
        if (err) throw err;
      console.log(result);
  
      }); 
    });
   // res.end();
    //con.query("SELECT * FROM spl_users ", function (err, result, fields) {
    //  console.log(result);
      // console.log(result[0].name);
      // console.log(result[0].surname);
      // myid=result[0].id;
      // myname=result[0].name;
      // mysurname=result[0].surname
          
    //});
  }
  else {
    res.send('Please enter ID!');
  }
  //res.send('Post page');
  res.render('index', { title: 'Express',id: myid , imie: myname , nazwisko: mysurname});
});

module.exports = router;