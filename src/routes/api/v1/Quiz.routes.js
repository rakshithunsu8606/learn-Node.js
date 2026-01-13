const express = require("express")

const router = express.Router()


router.get('/getAllQuiz', (req, res) => {
    res.status(200).json({ method: 'AllQuiz get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getQuiz
router.get('/getQuiz', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addQuiz', (req, res) => {
    res.status(200).json({ method: 'Quiz added Sucessfully' })


})

router.put('/updateQuiz/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Quiz update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteQuiz/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Quiz delete Sucessfully' })
})

module.exports = router