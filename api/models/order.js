const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  order_id:  String, // String is shorthand for {type: String}
  product: {type: String, required: true},
  quantity: {type: Number, default: 1}
});

module.exports = mongoose.model('Order', orderSchema)