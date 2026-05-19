const express = require("express")
const { EnrollmentController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllEnrollment', EnrollmentController.getAllEnrollment)

//http://localhost:8080/api/v1/category/getPayment
router.get('/getEnrollment/:id', EnrollmentController.getEnrollment)

router.post('/addEnrollment', EnrollmentController.addEnrollment)

router.put('/upadateEnrollment/:id', EnrollmentController.upadateEnrollment)

router.delete('/deleteEnrollment/:id', EnrollmentController.deleteEnrollment)



module.exports = router