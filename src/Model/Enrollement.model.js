const { default: mongoose } = require("mongoose");

const EnrollmentSchema = new mongoose.Schema(
    {
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'course'
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },
        payment_id: {
            type: mongoose.Types.ObjectId,
            ref: 'payment'
        },
        date: {
            type: Date,
        },
        enrollment_no: {
            type: String
        }

    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Enrollment = mongoose.model('enrollment', EnrollmentSchema);

module.exports = Enrollment