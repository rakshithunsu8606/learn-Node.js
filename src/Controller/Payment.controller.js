const Instance = require("../Config/Razorpay");
const Payment = require("../Model/Payment.model");

const getAllPayment = async (req, res) => {
    try {
        const Paymentt = await Payment.find();

        if (!Paymentt) {
            return res.status(400).json({ data: null, meassage: "AllPayment Not added" })
        }

        return res.status(200).json({ data: Paymentt, meassage: "AllPayment added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllPayment" + error.meassage })
    }
}

const getPayment = async (req, res) => {
    try {
        const payment = await Payment.find()

        console.log(payment);

        if (!payment) {
            return res.status(400).json({ data: null, message: "Payment Not get" })
        }

        res.status(200).json({ data: payment, message: 'Payment Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Payment' })
    }
}

const addPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body)

        console.log("payment", payment);

        if (!payment) {
            return res.status(400).json({ data: null, message: "Payment Not Difend" })
        }

        res.status(200).json({ data: payment, message: 'Payment Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Payment' })
    }
}

const deletePayment = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const payment = await Payment.findByIdAndDelete(req.params.id)

        console.log(payment);

        if (!payment) {
            return res.status(400).json({ data: null, message: "Payment Not Delete" })
        }

        res.status(200).json({ data: payment, message: 'Payment Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Payment' })
    }
}

const upadatePayment = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            upadte,
            { new: true }
        )

        console.log(payment);

        if (!payment) {
            return res.status(400).json({ data: null, message: "Payment Not Upadte" })
        }

        res.status(200).json({ data: payment, message: 'Payment Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Payment' })
    }
}

const CreateOrder = async (req, res) => {
    try {

        const { amount } = req.body;

        const options = {
            amount: amount * 100,
            currency: "INR"
        };

        const Order = await Instance.orders.create(options);

        res.status(200).json({
            success: true,
            Order
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Create order failed"
        });
    }
};

module.exports = {
    deletePayment,
    upadatePayment,
    addPayment,
    getPayment,
    getAllPayment,
    CreateOrder
}