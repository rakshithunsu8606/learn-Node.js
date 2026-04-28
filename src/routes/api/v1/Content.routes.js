const express = require("express")
const { ContentController } = require("../../../Controller")
const upload = require("../../../middleware/upload")

const router = express.Router()


router.get('/getAllContent', ContentController.getAllContent)

//http://localhost:8080/api/v1/category/getContent
router.get('/getContent/:id', ContentController.getContent)

router.post('/addContent', upload.array('video'), ContentController.addContent)

router.put('/updateContent/:id', upload.array('video'), ContentController.upadateContent)

router.delete('/deleteContent/:id', ContentController.deleteContent)

module.exports = router 