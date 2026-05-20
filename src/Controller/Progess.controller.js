const Progress = require("../Model/Progress.model");

const getAllProgress = async (req, res) => {
    try {
        const ProgressAll = await Progress.find();

        if (!ProgressAll) {
            return res.status(400).json({ data: null, meassage: "AllProgress Not added" })
        }

        return res.status(200).json({ data: ProgressAll, meassage: "AllProgress added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllProgress" + error.meassage })
    }
}

const getProgress = async (req, res) => {
    try {
        const progress = await Progress.find()

        console.log(progress);

        if (!progress) {
            return res.status(400).json({ data: null, message: "Progress Not get" })
        }

        res.status(200).json({ data: progress, message: 'Progress Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Progress' })
    }
}

const addProgress = async (req, res) => {
    try {
        const progress = await Progress.create(req.body)

        console.log("progress",progress);

        if (!progress) {
            return res.status(400).json({ data: null, message: "Progress Not Difend" })
        }

        res.status(200).json({ data: progress, message: 'Progress Sucess Add' })
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ data: null, message: 'Not Add Progress' })
    }
}

const deleteProgress = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const progress = await Progress.findByIdAndDelete(req.params.id)

        console.log(progress);

        if (!progress) {
            return res.status(400).json({ data: null, message: "Progress Not Delete" })
        }

        res.status(200).json({ data: progress, message: 'Progress Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Progress' })
    }
}

const upadateProgress = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const progress = await Progress.findByIdAndUpdate(
            req.params.id,    
            upadte,
            { new: true }
        )

        console.log(progress);

        if (!progress) {
            return res.status(400).json({ data: null, message: "Progress Not Upadte" })
        }

        res.status(200).json({ data: progress, message: 'Progress Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Progress' })
    }
}

module.exports = {
    deleteProgress,
    upadateProgress,
    addProgress,
    getProgress,
    getAllProgress
}