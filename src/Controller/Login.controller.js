const Login = require("../Model/Login.model")
// const fs = require("fs")
const Registration = require("../Controller/Registration.contoller")
const bcrypt = require('bcrypt');



const getAllLogin = async (req, res) => {
    try {
        const LoginAll = await Login.find();

        if (!LoginAll) {
            return res.status(400).json({ data: null, meassage: "AllLogin Not added" })
        }

        return res.status(200).json({ data: LoginAll, meassage: "AllLogin added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define AllLogin" + error.meassage })
    }
}

const getLogin = async (req, res) => {
    try {
        console.log(req.params.id);

        const login = await Login.findById(req.params.id)

        if (!login) {
            return res.status(400).json({ data: null, meassage: "getlogin Not added" })
        }

        return res.status(200).json({ data: login, meassage: "getlogin added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define getlogin" + error.meassage })
    }
}

const addLogin = async (req, res) => {
    try {

        const SecretPass = await bcrypt.compare(req.body.password, Registration.password)

        console.log("SecretPassData", SecretPass);

        if (!SecretPass) {
            return res.status(400).json({ data: null, meassage: "Secret pass not match" })
        }

        const login = await Login.create({...req.body,password:SecretPass});

        console.log("loginData", login);

        // const login = await Login.create(req.body);

        // console.log("loginData", login);


        if (!login) {
            return res.status(400).json({ data: null, meassage: "login Not added" })
        }

        return res.status(200).json({ data: login, meassage: "login added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define login" + error })
    }
}



module.exports = {
    getAllLogin,
    getLogin,
    addLogin
}