const jwt = require("jsonwebtoken");
const User = require("../Model/user.model");
// const Category = require("../Model/Category.model");

const Auth = (roles) => async (req, res, next) => {
    try {

        const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log("token",token);


        const decode = await jwt.verify(token, process.env.ACCESS_KEY)

        console.log("decode",decode);

        const user = await User.findById(decode._id)

        console.log("Userrrr:", user);

        if (!user) {
            return res.status(404).json({
                sucess: false,
                data: [],
                message: "User not found"
            })
        }

        if (!roles.includes(user.role)) {
            return res.status(400).json({
                sucess: false,
                data: [],
                message: "Your have not access"
            })
        }


        req.user = user;

        next();

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            sucess: false,
            data: [],
            message: error.message
        })
    }
};

module.exports = Auth;
