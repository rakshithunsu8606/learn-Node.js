const Category = require("../Model/Category.model")

const getAllCategory = (req, res) => {

}

const getCategory = (req, res) => {

}

const addCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body)

        if (!category) {
            return res.status(400).json({ data: null, meassage: "Category Not added" })
        }

        return res.status(200).json({ data: category, meassage: "Category added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define Category" + error.meassage })
    }
}

const updateCategory = (req, res) => {

}

const deleteCategory = (req, res) => {

}

module.exports = {
    getAllCategory,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}