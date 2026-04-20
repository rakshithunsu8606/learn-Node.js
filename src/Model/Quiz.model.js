const { types } = require("joi");
const { default: mongoose } = require("mongoose");

const QuizSchema = new mongoose.Schema(
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
        question: {
            type: String,
            trim: true
        },
        option: [{
            type: Array
        }],
        answer:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz