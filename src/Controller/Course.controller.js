const Course = require("../Model/Course.model")
const fs = require("fs")

const getAllCourse = async (req, res) => {
    try {
        const courseAll = await Course.find();

        if (!courseAll) {
            return res.status(400).json({ data: null, meassage: "Allcourse Not added" })
        }

        return res.status(200).json({ data: courseAll, meassage: "Allcourse added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define Allcourse" + error.meassage })
    }
}

const getCourse = async (req, res) => {
    try {
        console.log(req.params.id);

        const course = await Course.findById(req.params.id)

        if (!course) {
            return res.status(400).json({ data: null, meassage: "getCourse Not added" })
        }

        return res.status(200).json({ data: course, meassage: "getCourse added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define getCourse" + error.meassage })
    }
}

const addCourse = async (req, res) => {
    try {
        console.log(req.body);

        const course = await Course.create({ ...req.body, course_img: req.file.path })

        if (!course) {
            return res.status(400).json({ data: null, meassage: "Course Not added" })
        }

        return res.status(200).json({ data: course, meassage: "Course added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define Course" + error.message })
    }
}

const updateCourse = (req, res) => {

}

const deleteCourse = async (req, res) => {
    try {
        console.log(req.params.id);

        const course = await Course.findByIdAndDelete(req.params.id)

        console.log(course,course.course_img);
        

        // const path = course + './public/images/course_img/'

        fs.unlink(course.course_img, (err) => {                        
            if (err) {
                console.log(err);
            } else {
                console.log("Delete Sucessfully");
            }
        })
        if (!course) {
            return res.status(400).json({ data: null, meassage: "Course Not delete" })
        }

        return res.status(200).json({ data: course, meassage: "Course delete Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not delete Course" + error.meassage })
    }
}

module.exports = {
    getAllCourse,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
}