const express = require("express")

const router = express.Router()
const { TermsController } = require("../../../Controller")



router.get('/getAllTerms', TermsController.getAllTerms)

//http://localhost:8080/api/v1/category/getTerms
router.get('/getTerms/:id', TermsController.getTerms)

router.get('/activeTerms', TermsController.activeTerms)


router.post('/addTerms',TermsController.addTerms)

router.put('/updateTerms/:id',TermsController.updateTerms)

router.delete('/deleteTerms/:id', TermsController.deleteTerms)

module.exports = router


