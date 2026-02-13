const accountSid = process.env.TWILO_SID;
const authToken = process.env.TWILO_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (mobile_no, OTP) => {
    try {
        client.messages
            .create({
                body: `Your OTP ${OTP} 👋`,
                messagingServiceSid: 'MG298c428cba2a7987e5100799d10c6514',
                to: mobile_no
            })
            .then(message => console.log(message.sid));

        // client.verify.v2.services("VA7a93ca7570fd048f07cda185a823e7e2")
        //     .verifications
        //     // .body('Your Otp')
        //     .create({ to: mobile_no, channel: 'sms',body:'Your Otp'  })
        //     .then(verification => console.log(verification.sid));
    } catch (error) {
        throw new Error("Error Not sendSMS")
    }
}

module.exports = sendSMS