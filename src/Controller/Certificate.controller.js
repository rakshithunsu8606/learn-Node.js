const Certificate = require("../Model/Cerificate.model");

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

        console.log("CertificateAdd",certificate);

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

        console.log("CertificateDELE",certificate);

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

        console.log("progressUP",certificate);

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
    getAllCertificate
}