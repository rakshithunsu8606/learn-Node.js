const express = require("express")

const router = express.Router()


router.get('/getAllCertificate', (req, res) => {
    res.status(200).json({ method: 'AllCertificate get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getCertificate
router.get('/getCertificate', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addCertificate', (req, res) => {
    res.status(200).json({ method: 'Certificate added Sucessfully' })


})

router.put('/updateCertificate/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Certificate update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteCertificate/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Certificate delete Sucessfully' })
})

module.exports = router