const { default: mongoose } = require("mongoose");

const LoginSchema = new mongoose.Schema(
    {
        email: {
            type: String
        },
        password: {
            type: String
        },
        isVerify: {
            type: Boolean
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Login = mongoose.model('logiens', LoginSchema);

module.exports = Login