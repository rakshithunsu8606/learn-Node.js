const express = require("express")

const router = express.Router()


router.get('/getAllCard', (req, res) => {
    res.status(200).json({ method: 'AllCard get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getCard
router.get('/getCard', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addCard', (req, res) => {
    res.status(200).json({ method: 'Card added Sucessfully' })


})

router.put('/updateCard/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Card update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteCard/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Card delete Sucessfully' })
})

module.exports = router