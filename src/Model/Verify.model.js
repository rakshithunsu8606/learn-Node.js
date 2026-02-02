const { default: mongoose } = require("mongoose");

const VerifySchema = new mongoose.Schema(
    {
        email: {
            type: String
        },
        otp: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const VerifyModel  = mongoose.model('verifyies', VerifySchema);

module.exports = VerifyModel 