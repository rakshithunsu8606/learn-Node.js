const express = require("express")
// const upload = require("../../../middleware/upload")
const { VerifyController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllVerify', VerifyController.getAllVerify)

//http://localhost:8080/api/v1/category/getRegistration
router.get('/getVerify/:id',VerifyController.getVerify)

router.post('/addVerify', VerifyController.addVerify)



module.exports = router


