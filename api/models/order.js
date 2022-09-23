const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  order_id:  String, // String is shorthand for {type: String}
  product: String,
});

module.exports = mongoose.model('Order', orderSchema)