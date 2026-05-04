const { default: mongoose } = require("mongoose");

const SectionSchema = new mongoose.Schema(
    {
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'course'
        },
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String
        },
        instructure_id: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Section = mongoose.model('sections', SectionSchema);

module.exports = Section