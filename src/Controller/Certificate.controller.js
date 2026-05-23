const { Certificate_Create } = require("../../server/Certificate");
const Certificate = require("../Model/Certificate.model");
const Course = require("../Model/Course.model");
const User = require("../Model/user.model");


const genrateCertificate = async (req, res) => {

    const { user_id, course_id, grade, percentage, date } = req.body

    const user = await User.findById(user_id)

    console.log("userrrr", user);

    const course = await Course.findById(course_id)

    console.log("courseee", course);

    if (!course && !user) {
        return res.status(404).json({ data: null, meassage: "genrateCertificate Not Create" })
    }

    const createCertificate = await Certificate_Create({
        user_id: user.name,
        course_id: course.name,
        grade,
        percentage,
        date:new Date()
    })

    console.log("Done",createCertificate);
    


}


const getAllCertificate = async (req, res) => {
    try {
        const CertificateAll = await Certificate.find();

        if (!CertificateAll) {
            return res.status(400).json({ data: null, meassage: "AllCertificate Not added" })
        }

        return res.status(200).json({ data: CertificateAll, meassage: "AllCertificate added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllCertificate" + error.meassage })
    }
}

const getCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.find()

        console.log(certificate);

        if (!certificate) {
            return res.status(400).json({ data: null, message: "Certificate Not get" })
        }

        res.status(200).json({ data: certificate, message: 'Certificate Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Certificate' })
    }
}

const addCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.create(req.body)

        console.log("CertificateAdd", certificate);

        if (!certificate) {
            return res.status(400).json({ data: null, message: "Certificate Not Difend" })
        }

        res.status(200).json({ data: certificate, message: 'Certificate Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Certificate' })
    }
}

const deleteCertificate = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const certificate = await Certificate.findByIdAndDelete(req.params.id)

        console.log("CertificateDELE", certificate);

        if (!certificate) {
            return res.status(400).json({ data: null, message: "Certificate Not Delete" })
        }

        res.status(200).json({ data: certificate, message: 'Certificate Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Certificate' })
    }
}

const upadateCertificate = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const certificate = await Certificate.findByIdAndUpdate(
            req.params.id,
            upadte,
            { new: true }
        )

        console.log("progressUP", certificate);

        if (!certificate) {
            return res.status(400).json({ data: null, message: "Certificate Not Upadte" })
        }

        res.status(200).json({ data: certificate, message: 'Certificate Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Certificate' })
    }
}

module.exports = {
    deleteCertificate,
    upadateCertificate,
    addCertificate,
    getCertificate,
    getAllCertificate,
    genrateCertificate
}