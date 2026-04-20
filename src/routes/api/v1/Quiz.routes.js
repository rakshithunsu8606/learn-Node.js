const express = require("express")
const { QuizzController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllQuiz', QuizzController.getAllQuiz)

//http://localhost:8080/api/v1/category/getQuiz
router.get('/getQuiz', QuizzController.getQuiz)

router.post('/addQuiz', QuizzController.addQuiz)

router.put('/updateQuiz/:id', QuizzController.upadateQuiz)

router.delete('/deleteQuiz/:id', QuizzController.deleteQuiz)

module.exports = router