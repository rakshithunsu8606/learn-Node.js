const express = require("express")

const router = express.Router()


router.get('/getAllBlog', (req, res) => {
    res.status(200).json({ method: 'AllBlog get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getBlog
router.get('/getBlog', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addBlog', (req, res) => {
    res.status(200).json({ method: 'Blog added Sucessfully' })


})

router.put('/updateBlog/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Blog update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteBlog/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Blog delete Sucessfully' })
})

module.exports = router