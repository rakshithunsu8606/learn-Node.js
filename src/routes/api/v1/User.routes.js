const express = require("express")
const { UserController } = require("../../../Controller")
const passport = require("passport")
const { genrateToken } = require("../../../Controller/user.controller")
const PDFMake = require("../../../../server/PDFMake")

const router = express.Router()




router.post('/registration', UserController.Registration)

router.post('/login', UserController.Login)

router.post('/verifyUser', UserController.VerifyUser)

router.post('/gentarateNewToken', UserController.GentarateNewToken)

router.post('/logOut', UserController.logOut)

router.post('/forgote', UserController.ForgotePass)

router.post('/resetPass', UserController.ResetPass)

router.get('/cheakAuth', UserController.cheakAuth)

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    async function (req, res) {
        console.log('CallBack:', req.user);
        // Successful authentication, redirect home.
        // res.redirect('/');

        const { accessToken, refreshToken } = await genrateToken(req.user._id)

        console.log(accessToken, refreshToken);

        const accOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 15 * 60 * 1000
        }

        const refOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 15 * 60 * 1000
        }

        return res
            .cookie("accessToken", accessToken, accOpt)
            .cookie("refreshToken", refreshToken, refOpt)
            .status(200)
            .redirect('http://localhost:5173')
    });

router.get('/auth/facebook',
    passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    async function (req, res) {
        console.log('CallBack:', req.user);
        // Successful authentication, redirect home.
        const { accessToken, refreshToken } = await genrateToken(req.user._id)

        console.log(accessToken, refreshToken);

        const accOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 15 * 60 * 1000
        }

        const refOpt = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 15 * 60 * 1000
        }

        return res
            .cookie("accessToken", accessToken, accOpt)
            .cookie("refreshToken", refreshToken, refOpt)
            .status(200)
            .redirect('http://localhost:5173')
    });

router.get('/createPDF', PDFMake)

module.exports = router