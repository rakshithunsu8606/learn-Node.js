const { types } = require("joi");
const { default: mongoose } = require("mongoose");

const ProgressSchema = new mongoose.Schema(
    {
        enrollment_id: {
            type: mongoose.Types.ObjectId,
            ref: 'enrollment'
        },
        content_id: {
            type: mongoose.Types.ObjectId,
            ref: 'content'
        },
        duration: {
            type: Number
        },
        is_completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Progress = mongoose.model("progressies", ProgressSchema)
module.exports = Progress