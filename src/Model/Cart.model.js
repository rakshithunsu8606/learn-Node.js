const { default: mongoose } = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },
        items: [{
            course_id: {
                type: mongoose.Types.ObjectId,
                ref: 'course'
            },
            price: {
                type: String
            }
        }],

    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart