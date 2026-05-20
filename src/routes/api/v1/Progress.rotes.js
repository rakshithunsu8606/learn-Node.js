const express = require("express")
const { ProgressController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllProgress', ProgressController.getAllProgress)

//http://localhost:8080/api/v1/category/getProgress
router.get('/getProgress', ProgressController.getProgress)

router.post('/addProgress', ProgressController.addProgress)

router.put('/updateProgress/:id',ProgressController.upadateProgress)

router.delete('/deleteProgress/:id', ProgressController.deleteProgress)

module.exports = router