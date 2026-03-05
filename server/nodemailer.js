const nodemailer = require('nodemailer');

const sendMail = async (email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODE_MAILER_USER,
                pass: process.env.NODE_MAILER_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.NODE_MAILER_USER,
            to: email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) {

    }
}

module.exports = sendMail