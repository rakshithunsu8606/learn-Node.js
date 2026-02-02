const express = require("express")
const { CourseiesController } = require("../../../Controller")
const upload = require("../../../middleware/upload")

const router = express.Router()


router.get('/getAllCourse', CourseiesController.getAllCourse)

//http://localhost:8080/api/v1/category/getCourse
router.get('/getCourse/:id', CourseiesController.getCourse)

router.post('/addCourse',upload.single('course_img'), CourseiesController.addCourse)


router.put('/updateCourse/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Course update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteCourse/:id', CourseiesController.deleteCourse)

module.exports = router