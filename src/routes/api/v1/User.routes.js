const express = require("express")

const router = express.Router()


router.get('/getAllUser', (req, res) => {
    res.status(200).json({ method: 'AllUser get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getUser
router.get('/getUser', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addUser', (req, res) => {
    res.status(200).json({ method: 'User added Sucessfully' })


})

router.put('/updateUser/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'User update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteUser/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'User delete Sucessfully' })
})

module.exports = router