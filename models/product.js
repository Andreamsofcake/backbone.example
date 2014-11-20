
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;




// schema
var productSchema = new mongoose.Schema({
  name: String,
  sku: { type: String, default: "stuff"},
  created_at: { type: Date, default: Date.now },
  price: Number
});


// return model

module.exports = restful.model('Products', productSchema);