const { default: mongoose } = require("mongoose");

const ContentSchema = new mongoose.Schema(
    {
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'course'
        },
        Section_id: {
            type: mongoose.Types.ObjectId,
            ref: 'section'
        },
        name: {
            type: String,
            trim: true
        },
        video: [{
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }]
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Content = mongoose.model('content', ContentSchema);

module.exports = Content