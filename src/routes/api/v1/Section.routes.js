const express = require("express")
const { SectionController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllSection', SectionController.getAllSection)

//http://localhost:8080/api/v1/category/getSection
router.get('/getSection', SectionController.getSection)

router.post('/addSection',SectionController.addsection)

router.put('/updateSection/:id', SectionController.upadatesection)

router.delete('/deleteSection/:id', SectionController.deletesection)

module.exports = router