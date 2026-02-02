const express = require("express")
const { CategoriesController } = require("../../../Controller")
const upload = require("../../../middleware/upload")

const router = express.Router()


router.get('/getAllCategory', CategoriesController.getAllCategory)

//http://localhost:8080/api/v1/category/getCategory
router.get('/getCategory/:id',CategoriesController.getCategory)

router.get('/activeCategory',CategoriesController.activeCategory)


router.post('/addCategory',upload.single('category_img'), CategoriesController.addCategory)

router.put('/updateCategory/:id',upload.single('category_img'), CategoriesController.updateCategory)

router.delete('/deleteCategory/:id', CategoriesController.deleteCategory)

module.exports = router


