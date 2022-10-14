const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const OrderModel = require("../models/order");

router.get('/', async (req, res, next) => {
    try {
        const orders = await OrderModel.find().select("quantity product _id")
        // .populate("product") // Populate will give detil about id of product here
        res.status(200).json({
            docs_length: orders.length,
            docs: orders.map((o)=>{
                return {
                    order_id: o._id,
                    product: o.product,
                    quantity: o.quantity,
                    request: {
                        type: 'GET',
                        url: `http://localhost:3000/orders/${o._id}`
                    }
                }
            })
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: 'error', 
            error: error
        })
    }
})

router.post('/', (req, res, next) => {
    // We can also check the id of product if it exists already or not
    const order = new OrderModel({
        product: req.body.product,
        quantity: req.body.quantity
    })
    order.save()
    .then((result) => {
        console.log(result)
        res.status(200).json({
            result 
        })
    })
    .catch((error) => {
        console.log(error);
        res.status(200).json({
            message: "Handling POST on /orders, An Error Occurred",
            error: error.message
        })
    })
})

router.get('/:order_id', (req, res, next) => {
    const id = req.params.order_id
    if (id === "special") {
        res.status(200).json({
            message: "You found special Id by GET on /orders/:id"
        })    
    } else {
        res.status(200).json({
            message: "You passed an argument by GET on /orders/:id"
        })    
    }
})

router.patch('/:order_id', (req, res, next) => {
    const id = req.params.order_id
    res.status(200).json({
        message: "Updated current by Id by PATCH on /orders/:id"
    })    
})


router.delete('/:order_id', (req, res, next) => {
    const id = req.params.order_id
    res.status(200).json({
        message: "Deleted current by Id by DELETE on /orders/:id"
    })    
})

module.exports = router;
