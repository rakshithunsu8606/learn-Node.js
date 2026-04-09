const { default: mongoose } = require("mongoose");

const SectionSchema = new mongoose.Schema(
    {
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'coursies'
        },
        name: {
            type: String,
            // trim: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Section = mongoose.model('sections', SectionSchema);

module.exports = Section