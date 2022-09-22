const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET on /products"
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST on /products"
    })
})

router.get('/:product_id', (req, res, next) => {
    const id = req.params.product_id
    if (id === "special") {
        res.status(200).json({
            message: "You found special Id by GET on /products/:id"
        })    
    } else {
        res.status(200).json({
            message: "You passed an argument by GET on /products/:id"
        })    
    }
})

router.patch('/:product_id', (req, res, next) => {
    const id = req.params.product_id
    res.status(200).json({
        message: "Updated current by Id by PATCH on /products/:id"
    })    
})


router.delete('/:product_id', (req, res, next) => {
    const id = req.params.product_id
    res.status(200).json({
        message: "Deleted current by Id by DELETE on /products/:id"
    })    
})

module.exports = router;
