const { default: mongoose } = require("mongoose");

const RegistrationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique:true,
            trim:true
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        role:{
            type:String
        },
        DOB:{
            type:Date
        },
        isVerify: {
            type: Boolean,
            default:false
        },
        isActive: {
            type: Boolean,
            default: true
        },
        OTP:{
            type:Number
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const Registration = mongoose.model('registrations', RegistrationSchema);

module.exports = Registration