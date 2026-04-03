const Joi = require("joi");

const CategorySchema = Joi.object({
    name: Joi.string()
        .pattern(/^[A-Za-z\s]+$/)
        .required('Only for Alphabet not a number'),
    description: Joi.string()
        .required('Description is required')
});

module.exports = { CategorySchema };