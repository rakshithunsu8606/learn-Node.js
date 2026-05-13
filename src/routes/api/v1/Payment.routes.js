const express = require("express")
const { PaymentController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllPayment', PaymentController.getAllPayment)

//http://localhost:8080/api/v1/category/getPayment
router.get('/getPayment/:id', PaymentController.getPayment)

router.post('/addPayment', PaymentController.addPayment)

router.put('/updatePayment/:id', PaymentController.upadatePayment)

router.delete('/deletePayment/:id', PaymentController.deletePayment)

module.exports = router