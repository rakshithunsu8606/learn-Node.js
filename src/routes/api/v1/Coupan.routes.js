const express = require("express")

const router = express.Router()


router.get('/getAllCoupan', (req, res) => {
    res.status(200).json({ method: 'AllCoupan get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getCoupan
router.get('/getCoupan', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addCoupan', (req, res) => {
    res.status(200).json({ method: 'Coupan added Sucessfully' })


})

router.put('/updateCoupan/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Coupan update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteCoupan/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Coupan delete Sucessfully' })
})

module.exports = router