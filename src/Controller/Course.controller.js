const Course = require("../Model/Course.model")

const getAllCourse = (req, res) => {

}

const getCourse = (req, res) => {

}

const addCourse = async (req, res) => {
    try {
        console.log(req.body);
        
        const course = await Course.create(req.body)

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

const deleteCourse = (req, res) => {

}

module.exports = {
    getAllCourse,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
}