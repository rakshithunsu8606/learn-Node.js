const express = require("express")

const router = express.Router()


router.get('/getAllProgress', (req, res) => {
    res.status(200).json({ method: 'AllProgress get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getProgress
router.get('/getProgress', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addProgress', (req, res) => {
    res.status(200).json({ method: 'Progress added Sucessfully' })


})

router.put('/updateProgress/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Progress update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteProgress/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Progress delete Sucessfully' })
})

module.exports = router