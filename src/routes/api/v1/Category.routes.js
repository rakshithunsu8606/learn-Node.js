const express = require("express")
const { CategoriesController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllCategory', (req, res) => {
    res.status(200).json({ method: 'AllCategory get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getCategory
router.get('/getCategory', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addCategory', CategoriesController.addCategory)

router.put('/updateCategory/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Category update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteCategory/:id', (req, res) => {
    console.log(req.params.id);
    

    // console.log(req.query);

    res.status(200).json({ method: 'Category delete Sucessfully' })
})

module.exports = router