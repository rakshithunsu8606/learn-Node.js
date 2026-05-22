const { types } = require("joi");
const { default: mongoose } = require("mongoose");

const CertificateSchema = new mongoose.Schema(
    {
        enrollment_id: {
            type: mongoose.Types.ObjectId,
            ref: 'enrollment'
        },
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'course'
        },
        grade: {
            type: String
        },
        percentage:{
            type:Number
        },
        date: {
            type: Date
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Certificate = mongoose.model("certificates", CertificateSchema)
module.exports = Certificate