const express = require("express")

const router = express.Router()


router.get('/getAllPayment', (req, res) => {
    res.status(200).json({ method: 'AllPayment get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getPayment
router.get('/getPayment', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addPayment', (req, res) => {
    res.status(200).json({ method: 'Payment added Sucessfully' })


})

router.put('/updatePayment/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Payment update Sucessfully' })

    console.log(req.body);
})

router.delete('/deletePayment/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Payment delete Sucessfully' })
})

module.exports = router