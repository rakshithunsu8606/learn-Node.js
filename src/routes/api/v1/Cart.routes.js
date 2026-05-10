const express = require("express")
const { CartController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllCart', CartController.getAllCart)

//http://localhost:8080/api/v1/category/getCart
router.get('/getCart', CartController.getCart)

router.post('/addCart', CartController.addCart)

router.put('/updateCart/:id', CartController.upadateCart)

router.delete('/deleteCart/:id', CartController.deleteCart)

module.exports = router