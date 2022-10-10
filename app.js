const express = require('express');
const app = express()
const morgan = require("morgan")
const body_parser = require("body-parser")
const mongoose = require("mongoose");

// db url
mongoose.connect('mongodb+srv://manabeel:iuvhz07gGrnMnOy6@cluster0.0obva8g.mongodb.net/?retryWrites=true&w=majority', 
() => console.log("Connected to MongoDB"))

// Middleware
app.use(morgan('dev'))

// Getting Requests data
app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, Patch, PUT, DELETE');
        return res.status(200).json({})
    }
    next();
})
// Routes
const product_routes = require("./api/routes/products")
const order_routes = require("./api/routes/orders")

app.use('/products', product_routes);
app.use('/orders', order_routes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found")
    res.json({
        error: {
            message: error.message
        }
    })

    // error.status(404)
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
