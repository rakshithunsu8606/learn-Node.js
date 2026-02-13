const passport = require('passport');
const User = require('../src/Model/user.model');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const googleProvider = (req, res) => {
    try {
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8080/api/v1/user/auth/google/callback"
        },
            async function (accessToken, refreshToken, profile, cb) {
                console.log(profile);

                const userData = await User.findOne({ email: profile.emails[0].value })

                if (!userData) {
                    const user = await User.create({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id,
                        isVerify:true
                    })

                    return cb(null, user);
                }

                return cb(null, userData);


                // User.findOrCreate({ googleId: profile.id }, function (err, user) {
                //     return cb(err, user);
                // });
            }
        ));

        passport.serializeUser(function (user, done) {
            done(null, user._id);
        });

        passport.deserializeUser(async function (_id, done) {
            const user = await User.findById(_id)

            if (user) {
                done(null, user);
            } else {
                done('User Not exists', null);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const facebookProvider = (req, res) => {
    try {
        passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:8080/api/v1/user/auth/facebook/callback"
        },
            async function (accessToken, refreshToken, profile, cb) {
                console.log("profile:", profile);

                const user = await User.create({
                    name: profile.displayName,
                    // email: profile.emails[0].value,
                    facebookId: profile.id
                })
                // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
                //     return cb(err, user);
                // });
            }
        ));
    } catch (error) {

    }
}

module.exports = {
    googleProvider,
    facebookProvider
}