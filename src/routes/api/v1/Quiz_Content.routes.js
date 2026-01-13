const express = require("express")

const router = express.Router()


router.get('/getAllQuiz_Content', (req, res) => {
    res.status(200).json({ method: 'AllQuiz_Content get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getQuiz_Content
router.get('/getQuiz_Content', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addQuiz_Content', (req, res) => {
    res.status(200).json({ method: 'Quiz_Content added Sucessfully' })


})

router.put('/updateQuiz_Content/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Quiz_Content update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteQuiz_Content/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Quiz_Content delete Sucessfully' })
})

module.exports = router