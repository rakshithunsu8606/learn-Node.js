const express = require("express")

const router = express.Router()


router.get('/getAllTerm_Condition', (req, res) => {
    res.status(200).json({ method: 'AllTerm_Condition get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getTerm_Condition
router.get('/getTerm_Condition', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addTerm_Condition', (req, res) => {
    res.status(200).json({ method: 'Term_Condition added Sucessfully' })


})

router.put('/updateTerm_Condition/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Term_Condition update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteTerm_Condition/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Term_Condition delete Sucessfully' })
})

module.exports = router