const nodemailer = require('nodemailer');

const sendMail = async (email, subject,message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rakshithinsu8606@gmail.com',
                pass: 'rwcr apzu nndr zhob'
            }
        });

        const mailOptions = {
            from: 'rakshithinsu8606@gmail.com',
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