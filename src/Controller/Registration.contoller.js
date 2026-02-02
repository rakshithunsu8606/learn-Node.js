const Registration = require("../Model/Registration.model")
// const fs = require("fs")
const bcrypt = require('bcrypt');

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "rakshithinsu8606@gmail.com",
        pass: "izai zjnp qtwa nohf",
    },
});


const getAllRegistration = async (req, res) => {
    try {
        const RegistrationAll = await Registration.find();

        if (!RegistrationAll) {
            return res.status(400).json({ data: null, meassage: "AllRegistration Not added" })
        }

        return res.status(200).json({ data: RegistrationAll, meassage: "AllRegistration added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define AllRegistration" + error.meassage })
    }
}

const getRegistration = async (req, res) => {
    try {
        console.log(req.params.id);

        const Regis = await Registration.findById(req.params.id)

        if (!Regis) {
            return res.status(400).json({ data: null, meassage: "getRegistration Not added" })
        }

        return res.status(200).json({ data: Regis, meassage: "getRegistration added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define getRegistration" + error.meassage })
    }
}

const addRegistration = async (req, res) => {
    try {

        const info = await transporter.sendMail({
            from: '"Hello Rakshit" <rakshithinsu8606@gmail.com>', // sender address
            to: "HelloABC@123gamil.com", // list of recipients
            subject: "Hello", // subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // HTML body
        });



        console.log("Message sent: %s", info.messageId);

        const saltRounds = 10;

        const SecretPass = await bcrypt.hash(req.body.password, saltRounds)

        console.log("SecretPassData", SecretPass);

        const VerificationCode = Math.floor(100000 + Math.random() * 900000).toString()

        console.log("VerificationCode:", VerificationCode);


        const registration = await Registration.create({ ...req.body, password: SecretPass, OTP: VerificationCode });

        console.log("registrationData", registration);

        if (!registration) {
            return res.status(400).json({ data: null, meassage: "registration Not added" })
        }

        return res.status(200).json({ data: registration, meassage: "registration added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define registration" + error })
    }
}



module.exports = {
    getAllRegistration,
    getRegistration,
    addRegistration
}