const express = require("express")
const { QuizContentController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllQuiz_Content', QuizContentController.getAllQuizContent)

//http://localhost:8080/api/v1/category/getQuiz_Content
router.get('/getQuiz_Content', QuizContentController.getQuizContent)

router.post('/addQuiz_Content', QuizContentController.addQuizContent)

router.put('/updateQuiz_Content/:id', QuizContentController.upadateQuizContent)

router.delete('/deleteQuiz_Content/:id', QuizContentController.deleteQuizContent)

module.exports = router