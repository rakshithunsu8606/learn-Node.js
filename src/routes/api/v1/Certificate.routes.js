const express = require("express")
const { CertificateController } = require("../../../Controller")

const router = express.Router()


router.get('/getAllCertificate', CertificateController.getAllCertificate)

//http://localhost:8080/api/v1/category/getCertificate
router.get('/getCertificate', CertificateController.getCertificate)

router.post('/addCertificate', CertificateController.addCertificate)

router.put('/updateCertificate/:id', CertificateController.upadateCertificate)

router.delete('/deleteCertificate/:id', CertificateController.deleteCertificate)

module.exports = router