const CoupanModel = require("../Model/Coupan.model");

const getAllCoupan = async (req, res) => {
    try {
        const Coupan = await CoupanModel.find();

        if (!Coupan) {
            return res.status(400).json({ data: null, meassage: "AllCoupan Not added" })
        }

        return res.status(200).json({ data: Coupan, meassage: "AllCoupan added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllCoupan" + error.meassage })
    }
}

const getCoupan = async (req, res) => {
    try {
        const coupan = await CoupanModel.find()

        console.log(coupan);

        if (!coupan) {
            return res.status(400).json({ data: null, message: "Coupan Not get" })
        }

        res.status(200).json({ data: coupan, message: 'Coupan Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Coupan' })
    }
}

const addCoupan = async (req, res) => {
    try {
        const coupan = await CoupanModel.create(req.body)

        console.log("coupan",coupan);

        if (!coupan) {
            return res.status(400).json({ data: null, message: "Coupan Not Difend" })
        }

        res.status(200).json({ data: coupan, message: 'Coupan Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Coupan' })
    }
}

const deleteCoupan = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const coupan = await CoupanModel.findByIdAndDelete(req.params.id)

        console.log(coupan);

        if (!coupan) {
            return res.status(400).json({ data: null, message: "Coupan Not Delete" })
        }

        res.status(200).json({ data: coupan, message: 'Coupan Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Coupan' })
    }
}

const upadateCoupan = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const coupan = await CoupanModel.findByIdAndUpdate(
            req.params.id,
            upadte,
            { new: true }
        )

        console.log(coupan);

        if (!coupan) {
            return res.status(400).json({ data: null, message: "Coupan Not Upadte" })
        }

        res.status(200).json({ data: coupan, message: 'Coupan Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Coupan' })
    }
}

module.exports = {
    deleteCoupan,
    upadateCoupan,
    addCoupan,
    getCoupan,
    getAllCoupan
}