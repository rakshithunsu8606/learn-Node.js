const express = require("express")

const router = express.Router()


router.get('/getAllCart', (req, res) => {
    res.status(200).json({ method: 'AllCart get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getCart
router.get('/getCart', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addCart', (req, res) => {
    res.status(200).json({ method: 'Cart added Sucessfully' })


})

router.put('/updateCart/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Cart update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteCart/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Cart delete Sucessfully' })
})

module.exports = router