//depenencies

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongo Db
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extened: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//start server
app.listen(3000);
console.log('API is running on port 3000')
