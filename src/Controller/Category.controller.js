const { UpdateCloudinary, DeleteCloudinary } = require("../../server/Cloudinary");
const Category = require("../Model/Category.model")
const fs = require("fs")

console.log("hello");

const getAllCategory = async (req, res) => {
    try {
        const CategoryAll = await Category.find();

        if (!CategoryAll) {
            return res.status(400).json({ data: null, meassage: "AllCategory Not added" })
        }

        return res.status(200).json({ data: CategoryAll, meassage: "AllCategory added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllCategory" + error.meassage })
    }
}

const getCategory = async (req, res) => {
    try {
        console.log(req.params.id);

        const category = await Category.findById(req.params.id)

        if (!category) {
            return res.status(400).json({ data: null, meassage: "getCategory Not added" })
        }

        return res.status(200).json({ data: category, meassage: "getCategory added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define getCategory" + error.meassage })
    }
}

const addCategory = async (req, res) => {
    try {
        console.log("addCategory:", req.body, req.file, req.user);

        const obj = await UpdateCloudinary(req.file.path, "Category")

        const category = await Category.create({ ...req.body, category_img: { public_id: obj.public_id, url: obj.url } })

        console.log("categoryData", category);


        if (!category) {
            return res.status(400).json({ data: null, meassage: "Category Not added" })
        }

        return res.status(200).json({ data: category, meassage: "Category added Sucessfully" })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ data: null, meassage: "Incress Not define Category" + error.meassage })
    }
}

const updateCategory = async (req, res) => {
    try {
        // console.log(req.params.id);

        const categoryData = await Category.findById(req.params.id)

        console.log("req.file", req.file);
        console.log("categoryData", categoryData);

        let updateData = { ...req.body, category_img: { public_id: categoryData.category_img.public_id, url: categoryData.category_img.url } }

        if (req.file) {
            // fs.unlink(categoryData.category_img, (error) => {
            //     console.log("Image Not Delete And update", error);
            // })

            await DeleteCloudinary(categoryData?.category_img?.public_id)

            const obj = await UpdateCloudinary(req.file.path, "Category")

            updateData.category_img = { public_id: obj.public_id, url: obj.url }
        }

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        )

        if (!category) {
            return res.status(400).json({ data: null, meassage: "Category Not update" })
        }

        return res.status(200).json({ data: category, meassage: "Category update Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not update Category" + error.meassage })
    }
}

const deleteCategory = async (req, res) => {
    try {
        console.log(req.params.id);

        const category = await Category.findByIdAndDelete(req.params.id)

        await DeleteCloudinary(category?.category_img?.public_id)

        console.log("categoryDelete:", category);


        if (!category) {
            return res.status(400).json({ data: null, meassage: "Category Not delete" })
        }

        // fs.unlink(category.category_img, (err) => {
        //     console.log(err);
        // })

        return res.status(200).json({ data: category, meassage: "Category delete Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not delete Category" + error.meassage })
    }
}

const activeCategory = async (req, res) => {
    try {
        const categories = await Category.aggregate([
            {
                $match: {
                    isActive: true
                }
            },
            {
                $count: 'NoOfCategory'
            }

        ])

        if (!categories) {
            return res.status(400).json({ data: null, meassage: "activeCategory Not added" })
        }

        return res.status(200).json({ data: categories, meassage: "activeCategory added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define activeCategory" + error.meassage })
    }
}

module.exports = {
    getAllCategory,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    activeCategory
}