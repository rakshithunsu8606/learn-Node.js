const joi = require("joi")

const addCategorySchema = {
    body: joi.object().keys({
        name: joi.string().trim().required(),
        description: joi.string().required(),
        parent_category_id: joi.string().optional(),
        category_img: joi.any().optional()
    })
}

const updateCategorySchema = {
    params:joi.object().keys({
        id:joi.string().required().min(24)
    }),
    body: joi.object().keys({
        name: joi.string().trim().required(),
        description: joi.string().required(),
        parent_category_id: joi.string().optional(),
        category_img: joi.any().optional()
    })
}

const deleteCategorySchema = {
    params:joi.object().keys({
        id:joi.string().required().min(24)
    })
}


module.exports = {
    addCategorySchema,
    updateCategorySchema,
    deleteCategorySchema
}