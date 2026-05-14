const Order = require("../Model/Order.Model");

const getAllOrder = async (req, res) => {
    try {
        const Orderrr = await Order.find();

        if (!Orderrr) {
            return res.status(400).json({ data: null, meassage: "AllOrder Not added" })
        }

        return res.status(200).json({ data: Orderrr, meassage: "AllOrder added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllOrder" + error.meassage })
    }
}

const getOrder = async (req, res) => {
    try {
        const order = await Order.find()

        console.log(order);

        if (!order) {
            return res.status(400).json({ data: null, message: "Order Not get" })
        }

        res.status(200).json({ data: order, message: 'Order Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Order' })
    }
}

const addOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body)

        console.log("order", order);

        if (!order) {
            return res.status(400).json({ data: null, message: "Order Not Difend" })
        }

        res.status(200).json({ data: order, message: 'Order Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Order' })
    }
}

const deleteOrder = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const order = await Order.findByIdAndDelete(req.params.id)

        console.log(order);

        if (!order) {
            return res.status(400).json({ data: null, message: "Order Not Delete" })
        }

        res.status(200).json({ data: order, message: 'Order Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Order' })
    }
}

const upadateOrder = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            upadte,
            { new: true }
        )

        console.log(order);

        if (!order) {
            return res.status(400).json({ data: null, message: "Order Not Upadte" })
        }

        res.status(200).json({ data: order, message: 'Order Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Order' })
    }
}

module.exports = {
    deleteOrder,
    upadateOrder,
    addOrder,
    getOrder,
    getAllOrder
}