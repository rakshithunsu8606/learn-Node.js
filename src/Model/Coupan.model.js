const { default: mongoose } = require("mongoose");

const CoupanSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        discount: {
            type: String
        },
        startDate: {
            type: Date,
        },
        expiryDate: {
            type: Date,
        },
        limit: {
            type: String,
        },
        use: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const CoupanModel = mongoose.model("coupon", CoupanSchema)
module.exports = CoupanModel