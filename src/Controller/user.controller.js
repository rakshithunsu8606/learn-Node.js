const sendMail = require("../../server/nodemailer");
const User = require("../Model/user.model");
const bcrypt = require('bcrypt');



const Registration = async (req, res) => {

    try {
        const { email, password } = req.body;

        console.log(email, password);
        

        const userExi = await User.findOne({ email });

        console.log(userExi);
        

        if (userExi) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "User Already Exists"
            })
        }

        const SecretPass = await bcrypt.hash(password, 10)

        const OTP = Math.floor(1000 + Math.random() * 9000).toString()

        const user = await User.create({ ...req.body, password: SecretPass, OTP })

        sendMail(email, 'Registr OTP', 'Your OTP:' + OTP)

        const userData = await User.findOne({ email }).select('-password');

        if (!user) {
            return res.status(400).json({
                sucess: false,
                data: [],
                meassage: "registration Not Succesfully"
            })
        }

        return res.status(200).json({
            sucess: true,
            data: userData,
            meassage: "registration added Sucessfully"
        })



    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            sucess: false,
            data: [],
            message: error.meassage
        })
    }


}

module.exports = {
    Registration

}