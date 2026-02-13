const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            // required: true
        },
        googleId: {
            type: String
        },
        facebookId: {
            type: String
        },
        password: {
            type: String
        },
        role: {
            type: String,
            default: 'user'
        },
        mobile_no: {
            type: String
        },
        OTP: {
            type: Number
        },
        dob: {
            type: String
        },
        gender: {
            type: String
        },
        refreshToken: {
            type: String
        },
        isVerify: {
            type: Boolean,
            default: false
        },
        isActive: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const User = mongoose.model('users', UserSchema);

module.exports = User