const express = require("express")
const { CourseiesController } = require("../../../Controller")
const upload = require("../../../middleware/upload")

const router = express.Router()


router.get('/getAllCourse', CourseiesController.getAllCourse)

//http://localhost:8080/api/v1/category/getCourse
router.get('/getCourse/:id', CourseiesController.getCourse)

router.post('/addCourse', upload.single('course_img'), CourseiesController.addCourse)


router.put('/updateCourse/:id', upload.single('course_img'), CourseiesController.updateCourse)

router.delete('/deleteCourse/:id', CourseiesController.deleteCourse)

// router.get('/activeCourse',CourseiesController.activeCourse)


module.exports = router