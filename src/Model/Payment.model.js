const { default: mongoose } = require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
        Cart_id: {
            type: mongoose.Types.ObjectId,
            ref: 'cart'
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },
        Pay_Cart: [{
            course_id: {
                type: mongoose.Types.ObjectId,
                ref: 'course'
            },
            price: {
                type: String
            }
        }],
        orderId: {
            type: String
        },
        paymentId: {
            type: String
        },
        signature: {
            type: String
        },
        transactionId: {
            type: String
        },
        amount: {
            type: Number
        },
        status: {
            type: String,
        },
        datetime: {
            type: Date,

        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Payment = mongoose.model("payment", PaymentSchema)
module.exports = Payment