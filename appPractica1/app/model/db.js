'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'seminario1practica1bd.calmokukdpvb.us-west-2.rds.amazonaws.com',
    user     : 'alba2108',
    password : '201513629',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;