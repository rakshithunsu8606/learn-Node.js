const express = require("express")
const { UserController } = require("../../../Controller")

const router = express.Router()




router.post('/registration', UserController.Registration)



module.exports = router