const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET on /orders"
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST on /orders"
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
