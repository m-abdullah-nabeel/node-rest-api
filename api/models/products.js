const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Product", productSchema);;
