const express = require("express")
// const upload = require("../../../middleware/upload")
const { LoginController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllLogin', LoginController.getAllLogin)

//http://localhost:8080/api/v1/category/getRegistration
router.get('/getLogin/:id',LoginController.getLogin)

router.post('/addLogin', LoginController.addLogin)



module.exports = router


