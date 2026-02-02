const VerifyModel  = require("../Model/Verify.model")
// const fs = require("fs")


const getAllVerify = async (req, res) => {
    try {
        const Verify = await VerifyModel .find();

        if (!Verify) {
            return res.status(400).json({ data: null, meassage: "AllVerify Not added" })
        }

        return res.status(200).json({ data: Verify, meassage: "AllVerify added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define AllVerify" + error.meassage })
    }
}

const getVerify = async (req, res) => {
    try {
        console.log(req.params.id);

        const Verify = await VerifyModel .findById(req.params.id)

        if (!Verify) {
            return res.status(400).json({ data: null, meassage: "getVerify Not added" })
        }

        return res.status(200).json({ data: Verify, meassage: "getVerify added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define getVerify" + error.meassage })
    }
}

const addVerify = async (req, res) => {
    try {
        const Verify = await VerifyModel.create(req.body);

        console.log("VerifyData", Verify);


        if (!Verify) {
            return res.status(400).json({ data: null, meassage: "Verify Not added" })
        }

        return res.status(200).json({ data: Verify, meassage: "Verify added Sucessfully" })
    } catch (error) {
        return res.status(400).json({ data: null, meassage: "Incress Not define Verify" + error })
    }
}



module.exports = {
    getAllVerify,
    getVerify,
    addVerify
}