const express = require("express")

const router = express.Router()


router.get('/getAllContent', (req, res) => {
    res.status(200).json({ method: 'AllContent get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getContent
router.get('/getContent', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addContent', (req, res) => {
    res.status(200).json({ method: 'Content added Sucessfully' })


})

router.put('/updateContent/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Content update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteContent/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Content delete Sucessfully' })
})

module.exports = router