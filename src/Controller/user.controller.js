const jwt = require('jsonwebtoken');
const sendMail = require("../../server/nodemailer");
const User = require("../Model/user.model");
const bcrypt = require('bcrypt');
const sendSMS = require('../../server/twilo');
// const cookie = require("cookie");

const genrateToken = async (_id) => {
    // #swagger.tags = ['Auth']
    try {

        const user = await User.findById(_id);

        const accessToken = jwt.sign(
            { _id, expire: '1h', role: user.referece },
            process.env.ACCESS_KEY,
            { expiresIn: 60 * 60 }
        )

        const refreshToken = jwt.sign(
            { _id, expire: '7d' },
            process.env.REFERECE_KEY,
            { expiresIn: '7d' }
        )

        user.refreshToken = refreshToken;

        await user.save();

        return { accessToken, refreshToken }

    } catch (error) {
        throw new Error("Not A GentarateToken") + error
    }
}

const Registration = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { email, password, mobile_no } = req.body;

        console.log(email, password);


        const userExi = await User.findOne({ email });

        // console.log(userExi);


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

        // sendSMS(mobile_no,OTP)

        const userData = await User.findOne({ email }).select('-password,-OTP');

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

const ResetPass = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { email, password } = req.body;

        console.log(email, password);


        const userExi = await User.findOne({ email });

        console.log(userExi);


        if (!userExi) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "User Not Exists"
            })
        }

        const SecretPass = await bcrypt.hash(password, 10)


        console.log(SecretPass);

        userExi.password = SecretPass;

        await userExi.save()

        return res.status(200).json({
            sucess: true,
            data: userExi,
            meassage: "ResetPass Sucessfully"
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

const ForgotePass = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { email } = req.body;

        console.log(email);


        const userExi = await User.findOne({ email });

        console.log("userExiiiiiiii:", userExi);


        if (!userExi) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "User Not Exists"
            })
        }

        const OTP = Math.floor(1000 + Math.random() * 9000).toString()

        sendMail(email, 'Forgote OTP', 'Your OTP:' + OTP)

        userExi.OTP = OTP

        await userExi.save();

        return res.status(200).json({
            sucess: true,
            data: userExi,
            meassage: "Forgote OTP Sucessfully"
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



const Login = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { email, password } = req.body;

        console.log(email, password);


        const userExists = await User.findOne({ email });

        console.log("userExists:", userExists);


        if (!userExists) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "User Already Exists"
            })
        }

        const verifyPass = await bcrypt.compare(password, userExists.password)

        console.log("verifyPass:", verifyPass);


        if (!verifyPass) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "Not Verify Password"
            })
        }

        if (!userExists.isVerify) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "User Is Not Verifed."
            })
        }

        const { accessToken, refreshToken } = await genrateToken(userExists._id)


        console.log("ACCESS:", accessToken);
        console.log("REFRESH:", refreshToken);

        const accOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 15 * 60 * 1000
        }

        const refOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 15 * 60 * 1000
        }

        return res
            .cookie("accessToken", accessToken, accOpt)
            .cookie("refreshToken", refreshToken, refOpt)
            .status(200)
            .json({
                sucess: true,
                data: userExists,
                meassage: "Login Sucessfully."
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

const VerifyUser = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { email, OTP } = req.body;

        console.log(email, OTP);


        const userVerify = await User.findOne({ email, OTP });

        console.log("userExistssss:", userVerify);


        if (!userVerify) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "Invalid Email Or OTP"
            })
        }

        userVerify.isVerify = true;

        await userVerify.save();

        return res.status(200).json({
            sucess: true,
            data: userVerify,
            meassage: "Verify Sucessfully"
        })

    } catch (error) {
        return res.status(500).json({
            sucess: false,
            data: [],
            message: error.meassage
        })
    }
}

const GentarateNewToken = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {

        console.log("cookie", req.cookies);

        const decode = await jwt.verify(req.cookies.refreshToken, process.env.REFERECE_KEY)

        console.log(decode);

        const user = await User.findById(decode._id)

        if (!user) {
            return res.status(404).json({
                sucess: false,
                data: [],
                message: "User Is Not Found."
            })
        }

        if (user.refreshToken !== req.cookies.refreshToken) {
            return res.status(404).json({
                sucess: false,
                data: [],
                message: "User Is Not Match"
            })
        }

        const { accessToken, refreshToken } = await genrateToken(user._id)

        console.log(accessToken, refreshToken);

        const accOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 60 * 60 * 1000
        }

        const refOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000
        }

        return res
            .cookie("accessToken", accessToken, accOpt)
            .cookie("refreshToken", refreshToken, refOpt)
            .status(200)
            .json({
                sucess: true,
                data: user,
                meassage: "Genreted Successfully"
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

const logOut = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const { _id } = req.body

        const user = await User.findByIdAndUpdate(
            { _id },
            {
                $unset: {
                    refreshToken: 1
                }
            },
            { new: true }
        )

        if (!user) {
            return res.status(400).json({
                sucess: false,
                data: null,
                message: "User Is Not logOut"
            })
        }

        return res
            .clearCookie("accessToken")
            .clearCookie("refreshToken")
            .status(200)
            .json({
                sucess: true,
                data: null,
                meassage: "User Success logOut"
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

const cheakAuth = async (req, res) => {
    // #swagger.tags = ['Auth']

    try {
        const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            return res.status(401).json({
                sucess: false,
                data: [],
                message: "User Logout."
            })
        }

        const decode = await jwt.verify(token, process.env.ACCESS_KEY)

        if (!decode) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "User not found"
            })
        }

        const user = await User.findById(decode._id)

        console.log("Userrrr:", user);

        if (!user) {
            return res.status(404).json({
                sucess: false,
                data: [],
                message: "User not found"
            })
        }

        return res.status(200).json({
            sucess: true,
            data: user,
            meassage: "Sucessfully Authentication"
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
    Registration,
    Login,
    VerifyUser,
    GentarateNewToken,
    logOut,
    cheakAuth,
    genrateToken,
    ForgotePass,
    ResetPass
}