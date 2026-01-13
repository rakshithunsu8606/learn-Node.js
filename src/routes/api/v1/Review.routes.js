const express = require("express")

const router = express.Router()


router.get('/getAllReview', (req, res) => {
    res.status(200).json({ method: 'AllReview get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getReview
router.get('/getReview', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addReview', (req, res) => {
    res.status(200).json({ method: 'Review added Sucessfully' })


})

router.put('/updateReview/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Review update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteReview/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Review delete Sucessfully' })
})

module.exports = router