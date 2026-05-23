// const { types } = require("joi");
const { default: mongoose } = require("mongoose");

const CertificateSchema = new mongoose.Schema(
    {
        enrollment_id: {
            type: mongoose.Types.ObjectId,
            ref: 'enrollment'
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'course'
        },
        grade: {
            type: String
        },
        percentage: {
            type: Number
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