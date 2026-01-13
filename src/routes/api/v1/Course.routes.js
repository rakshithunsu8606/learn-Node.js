const express = require("express")
const { CourseiesController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllCourse', (req, res) => {
    res.status(200).json({ method: 'AllCourse get Sucessfully' })
})

//http://localhost:8080/api/v1/category/getCourse
router.get('/getCourse', (req, res) => {
    res.status(200).json({ id: 101, name: 'abc' })
})

router.post('/addCourse', CourseiesController.addCourse)

router.put('/updateCourse/:id', (req, res) => {
    const id = req.params.id

    res.status(200).json({ method: 'Course update Sucessfully' })

    console.log(req.body);
})

router.delete('/deleteCourse/:id', (req, res) => {
    // const id=req.params.id

    console.log(req.query);

    res.status(200).json({ method: 'Course delete Sucessfully' })
})

module.exports = router