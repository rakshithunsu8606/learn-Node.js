const express = require("express")

const router = express.Router()


router.get('/getAllWhishlist', (req, res) => {
    res.status(200).json({ method: 'AllWhishlist get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getWhishlist
router.get('/getWhishlist', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addWhishlist', (req, res) => {
    res.status(200).json({ method: 'Whishlist added Sucessfully' })


})

router.put('/updateWhishlist/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Whishlist update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteWhishlist/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Whishlist delete Sucessfully' })
})

module.exports = router