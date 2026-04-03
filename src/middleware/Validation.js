const Joi = require("joi");

const pick = (reqObj, schemakeys) => {
    return schemakeys.reduce((obj, k) => {
        if (reqObj && reqObj.hasOwnProperty(k)) {
            obj[k] = reqObj[k]
        }

        return obj;
    }, {})

}

const ValidationSchema = (Schema) => (req, res, next) => {
    try {
        const objs = pick(req, Object.keys(Schema));

        console.log(objs);

        const { error, value } = Joi.compile(Schema).prefs({ abortEarly: false }).validate(objs)

        console.log(error, value);

        if (error) {
            let errorMessage = error.details.map(v => v.message).join(' ,');

            console.log(errorMessage);

            return res.status(400).json({
                success: false,
                data: null,
                message: "Validation Error" + errorMessage
            })


        }

        Object.assign(req, value)

        next();

    } catch (error) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Internal Server Error" + error.message
        })
    }

}

module.exports = ValidationSchema;