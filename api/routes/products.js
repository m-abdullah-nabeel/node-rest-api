const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ProductModel = require("../models/products");

// Fetch All the products
router.get('/', async (req, res, next) => {
    try {
        const products = await ProductModel.find();
        console.log(products)
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: 'error', 
            error: error
        })
    }
    // res.status(200).json({
    //     message: "Handling GET on /products"
    // })
})


// Save data in Products
router.post('/', async (req, res, next) => {
    const product_ = new ProductModel({
        name: req.body.name,
        price: req.body.price
    })

    product_.save()
   .then(doc => {
     console.log(doc)
     res.status(200).json(doc)
   })
   .catch(err => {
     console.error(err)
     res.status(500).json(err)
   })
})

// Fetch one Product/Item
router.get('/:product_id', async (req, res, next) => {
    const id = req.params.product_id
    try {
        const product = await ProductModel.findById(id);
        console.log(product);
    
        res.status(200).json({
            message: "You requested Id by GET on /products/:id",
            product: product
        })    
    } catch (error) {
        res.status(200).json({
            message: "Your requested Id by GET on /products/:id Rsulted in an error",
            error: error
        })
    }
})

// Update the item
router.patch('/:product_id', async (req, res, next) => {
    const id = req.params.product_id
    try {
        const product = await ProductModel.update({_id: id}, {
            name: req.body.name,
            price: req.body.price
        })
        console.log(product);
    
        res.status(200).json({
            message: "You requested Id by PATCH on /products/:id",
            product: product
        })    
    } catch (error) {
        res.status(404).json({
            message: "Your requested Id by PATCH on /products/:id Rsulted in an error",
            error: error.message
        })
    }

})

// Delete the item
router.delete('/:product_id', async (req, res, next) => {
    const id = req.params.product_id
    try {
        const del_prod = await ProductModel.deleteOne({_id: id})
        // console.log(del_prod)
        res.status(200).json({
            message: "Deleted current by Id by DELETE on /products/:id",
            deleted: del_prod
        })    
    
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Deleted current by Id by DELETE on /products/:id",
            error: error
        })    
    }
})

module.exports = router;
