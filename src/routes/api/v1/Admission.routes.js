const express = require("express")

const router = express.Router()


router.get('/getAllAdmission', (req, res) => {
    res.status(200).json({ method: 'AllAdmission get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getAdmission
router.get('/getAdmission', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addAdmission', (req, res) => {
    res.status(200).json({ method: 'Admission added Sucessfully' })


})

router.put('/updateAdmission/:id', (req, res) => {
    console.log(req.params.id);


    res.status(200).json({ method: 'Admission update Sucessfully' })


})

router.delete('/deleteAdmission/:id', (req, res) => {
    console.log(req.params.id);


    // console.log(req.query);

    res.status(200).json({ method: 'Admission delete Sucessfully' })
})

module.exports = router