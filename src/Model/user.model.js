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
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: 'user'
        },
        OTP: {
            type: Number
        },
        dob: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
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