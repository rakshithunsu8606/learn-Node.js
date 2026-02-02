const express = require("express")
const { RegistrationController } = require("../../../Controller")
// const upload = require("../../../middleware/upload")

const router = express.Router()


router.get('/getAllRegistration', RegistrationController.getAllRegistration)

//http://localhost:8080/api/v1/category/getRegistration
router.get('/getRegistration/:id',RegistrationController.getRegistration)

router.post('/addRegistration', RegistrationController.addRegistration)



module.exports = router


