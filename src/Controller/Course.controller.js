const { UpdateCloudinary, DeleteCloudinary } = require("../../server/Cloudinary");
const Course = require("../Model/Course.model");
const fs = require("fs")

const getAllCourse = async (req, res) => {
    // #swagger.tags = ['Course']

    try {
        const courseAll = await Course.find();

        console.log(courseAll);


        if (!courseAll) {
            return res.status(400).json({ data: null, meassage: "Allcourse Not added" })
        }

        return res.status(200).json({ data: courseAll, meassage: "Allcourse added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define Allcourse" + error.meassage })
    }
}

const getCourse = async (req, res) => {
    // #swagger.tags = ['Course']

    try {
        console.log(req.params.id);

        const course = await Course.findById(req.params.id)

        if (!course) {
            return res.status(400).json({ data: null, meassage: "getCourse Not added" })
        }

        return res.status(200).json({ data: course, meassage: "getCourse added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define getCourse" + error.meassage })
    }
}

const addCourse = async (req, res) => {
    // #swagger.tags = ['Course']
    // #swagger.consumes = ['multipart/form-data'] 
    /* #swagger.parameters['name'] = {
        in: 'formData',                            
        description: 'Course name',                   
        required: true,                     
        type:'string',                              
    } */

    /* #swagger.parameters['description'] = {
        in: 'formData',                            
        description: 'Course description',                   
        required: true,                     
        type:'string',                           
    } */

    /* #swagger.parameters['course_img'] = {
        in: 'formData',                            
        description: 'Course course_img',                   
        required: true,                     
        type:'file',                          
    } */

    try {
        console.log("req.body", req.body);
        console.log("req.filesss", req.files)

        // console.log("req.fi",req?.body?.course_video);

        // const course = await Course.create({ ...req.body, course_img: req.file.path })

        // const course = await Course.create(req.body)

        const filesss = req.files

        console.log("filesss", filesss);

        const urls = []

        for (const file of filesss) {
            console.log("err", file.path);

            const obj = await UpdateCloudinary(file.path, "Course")
            urls.push({
                public_id: obj.public_id,
                url: obj.url
            })
        }

        console.log("urls:", urls);



        const course = await Course.create({ ...req.body, course_img: urls })

        console.log("categoryData", course);


        if (!course) {
            return res.status(400).json({ data: null, meassage: "Course Not added" })
        }

        return res.status(200).json({ data: course, meassage: "Course added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define Course" + error.message })
    }
}

const updateCourse = async (req, res) => {
    // #swagger.tags = ['Course']
    // #swagger.consumes = ['multipart/form-data'] 
    /* #swagger.parameters['name'] = {
       in: 'formData',                            
       description: 'Category name',                                       
       type:'string',                              
   } */

    /* #swagger.parameters['description'] = {
        in: 'formData',                            
        description: 'Category description',                                       
        type:'string',                           
    } */

    /* #swagger.parameters['course_img'] = {
        in: 'formData',                            
        description: 'Category course_img',                                       
        type:'file',                          
    } */

    try {

        const courseData = await Course.findById(req.params.id)

        console.log("req.file", req.files);
        console.log("categoryData", courseData);

        const filesssUpdate = req.files

        console.log("filesssUpdate", filesssUpdate);

        // let updateData = { ...req.body, course_img: { public_id: courseData.course_img.public_id, url: courseData.course_img.url } }

        let updateData = { ...req.body }


        if (filesssUpdate.length > 0) {
            // fs.unlink(categoryData.course_img, (error) => {
            //     console.log("Image Not Delete And update", error);
            // })

            // for (const Delete of courseData.course_img) {
            //     await DeleteCloudinary(Delete?.public_id)
            // }

            for (const Delete of courseData.course_img) {
                await DeleteCloudinary(Delete?.public_id)
            }

            // const obj = await UpdateCloudinary(req.file.path, "Course")

            const urls = []

            for (const file of filesssUpdate) {

                const obj = await UpdateCloudinary(file.path, "Course")
                urls.push({
                    public_id: obj.public_id,
                    url: obj.url
                })
            }

            console.log("urls:", urls);

            updateData.course_img = urls;
        } else {
            updateData.course_img = courseData.course_img;
        }



        console.log("updateData", updateData);


        const course = await Course.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        )

        console.log(course);


        if (!course) {
            return res.status(400).json({ data: null, meassage: "Course Not update" })
        }

        return res.status(200).json({ data: course, meassage: "Course update Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not update Course" + error.meassage })
    }
}

const deleteCourse = async (req, res) => {
    // #swagger.tags = ['Course']

    try {
        console.log(req.params.id);

        const course = await Course.findByIdAndDelete(req.params.id)

        await DeleteCloudinary(course?.course_img?.public_id)

        console.log(course, course.course_img);


        // const path = course + './public/images/course_img/'

        // fs.unlink(course.course_img, (err) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Delete Sucessfully");
        //     }
        // })

        if (!course) {
            return res.status(400).json({ data: null, meassage: "Course Not delete" })
        }

        return res.status(200).json({ data: course, meassage: "Course delete Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not delete Course" + error.meassage })
    }
}

// const activeCourse = async (req, res) => {
//     // #swagger.tags = ['Course']

//     try {

//         let updateData = { ...req.body }

//         console.log("ActiveupdateData", updateData);


//         const course = await Course.findByIdAndUpdate(
//             req.params.id,
//             updateData,
//             { new: true, runValidators: true }
//         )

//         console.log("ActiveCourse", course);


//         if (!course) {
//             return res.status(400).json({ data: null, meassage: "active Not active" })
//         }

//         return res.status(200).json({ data: course, meassage: "active active Sucessfully" })
//     } catch (error) {
//         return res.status(500).json({ data: null, meassage: "Incress Not active Course" + error.meassage })
//     }
// }

module.exports = {
    getAllCourse,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse,
    // activeCourse
}