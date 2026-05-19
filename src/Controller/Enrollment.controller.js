const Enrollment = require("../Model/Enrollement.model");

const getAllEnrollment = async (req, res) => {
    try {
        const EnrollmentAll = await Enrollment.find();

        if (!EnrollmentAll) {
            return res.status(400).json({ data: null, meassage: "AllEnrollment Not added" })
        }

        return res.status(200).json({ data: EnrollmentAll, meassage: "AllEnrollment added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllEnrollment" + error.meassage })
    }
}

const getEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.find()

        console.log(enrollment);

        if (!enrollment) {
            return res.status(400).json({ data: null, message: "Enrollment Not get" })
        }

        res.status(200).json({ data: enrollment, message: 'Enrollment Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Enrollment' })
    }
}

const addEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.create(req.body)

        console.log("enrollment",enrollment);

        if (!enrollment) {
            return res.status(400).json({ data: null, message: "Enrollment Not Difend" })
        }

        res.status(200).json({ data: enrollment, message: 'Enrollment Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Enrollment' })
    }
}

const deleteEnrollment = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const enrollment = await Enrollment.findByIdAndDelete(req.params.id)

        console.log(enrollment);

        if (!enrollment) {
            return res.status(400).json({ data: null, message: "Enrollment Not Delete" })
        }

        res.status(200).json({ data: enrollment, message: 'Enrollment Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Enrollment' })
    }
}

const upadateEnrollment = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const enrollment = await Enrollment.findByIdAndUpdate(
            req.params.id,    
            upadte,
            { new: true }
        )

        console.log(enrollment);

        if (!enrollment) {
            return res.status(400).json({ data: null, message: "Enrollment Not Upadte" })
        }

        res.status(200).json({ data: enrollment, message: 'Enrollment Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Enrollment' })
    }
}

module.exports = {
    deleteEnrollment,
    upadateEnrollment,
    addEnrollment,
    getEnrollment,
    getAllEnrollment
}