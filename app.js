const express = require('express');
const app = express()
const morgan = require("morgan")

app.use(morgan('dev'))
// Routes
const product_routes = require("./api/routes/products")
const order_routes = require("./api/routes/orders")

app.use('/products', product_routes);
app.use('/orders', order_routes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status(404)
    next(error)
})

app.use((req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;
