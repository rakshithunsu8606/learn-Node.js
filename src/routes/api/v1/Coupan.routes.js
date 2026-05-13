const express = require("express")
const { CoupanController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllCoupan', CoupanController.getAllCoupan)

//http://localhost:8080/api/v1/category/getCoupan
router.get('/getCoupan', CoupanController.getCoupan)

router.post('/addCoupan',CoupanController.addCoupan)

router.put('/updateCoupan/:id', CoupanController.upadateCoupan)

router.delete('/deleteCoupan/:id', CoupanController.deleteCoupan)

module.exports = router