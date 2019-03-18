const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'seminario1practica1bd.calmokukdpvb.us-west-2.rds.amazonaws.com',
    user: 'alba2108',
    password: '201513629',
    database: 'mydb'
});

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'seminario1practica1bd.calmokukdpvb.us-west-2.rds.amazonaws.com',
    user: 'alba2108',
    password: '201513629',
    database: 'mydb'
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
