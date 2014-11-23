
// dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');

//routes
Product.methods(['get','put', 'post', 'delete'])
  .after('get', function(req, res, next){
  Product.find({}).sort({created_at: -1});
  next();
});
Product.register(router, '/products');


// return router

module.exports = router;