const express = require("express")

const router = express.Router()


router.get('/getAllResult', (req, res) => {
    res.status(200).json({ method: 'AllResult get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getResult
router.get('/getResult', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addResult', (req, res) => {
    res.status(200).json({ method: 'Result added Sucessfully' })


})

router.put('/updateResult/:id', (req, res) => {
    
    

    res.status(200).json({ method: 'Result update Sucessfully' })

    console.log(req.params.id);
    // console.log(req.body);
})

router.delete('/deleteResult/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Result delete Sucessfully' })
})

module.exports = router