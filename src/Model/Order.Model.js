const { default: mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },
        email: {
            type: String
        },
        course_id: [{
            type: mongoose.Types.ObjectId,
            ref: 'course'
        }],
        amount: {
            type: String
        },
        status: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Order = mongoose.model("order", OrderSchema)
module.exports = Order