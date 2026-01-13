const express = require("express")

const router = express.Router()


router.get('/getAllSection', (req, res) => {
    res.status(200).json({ method: 'AllSection get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getSection
router.get('/getSection', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addSection', (req, res) => {
    res.status(200).json({ method: 'Section added Sucessfully' })


})

router.put('/updateSection/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Section update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteSection/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Section delete Sucessfully' })
})

module.exports = router