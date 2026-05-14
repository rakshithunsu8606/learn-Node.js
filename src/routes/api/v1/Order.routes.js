const express = require("express")
const { OrderController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllOrder', OrderController.getAllOrder)

//http://localhost:8080/api/v1/category/getBlog
router.get('/getOrder', OrderController.getOrder)

router.post('/addOrder', OrderController.addOrder)

router.put('/updateOrder/:id', OrderController.upadateOrder)

router.delete('/deleteOrder/:id', OrderController.deleteOrder)

module.exports = router