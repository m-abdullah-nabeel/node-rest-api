const express = require('express');
const app = express()
const morgan = require("morgan")

app.use(morgan('dev'))
// Routes
const product_routes = require("./api/routes/products")
const order_routes = require("./api/routes/orders")

app.use('/products', product_routes);
app.use('/orders', order_routes);

module.exports = app;
