const { types } = require("joi");
const { default: mongoose } = require("mongoose");

const QuizContentSchema = new mongoose.Schema(
    {
        quiz_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Quiz',
        },
        question: {
            type: String,
            trim: true
        },
        option: [{
            type: String
        }],
        answer: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const QuizCon = mongoose.model('QuizContent', QuizContentSchema);

module.exports = QuizCon