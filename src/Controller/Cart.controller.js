const Cart = require("../Model/Cart.model");

const getAllCart = async (req, res) => {
    try {
        const CartAll = await Cart.find();

        if (!CartAll) {
            return res.status(400).json({ data: null, meassage: "AllCart Not added" })
        }

        return res.status(200).json({ data: CartAll, meassage: "AllCart added Sucessfully" })
    } catch (error) {
        return res.status(500).json({ data: null, meassage: "Incress Not define AllCart" + error.meassage })
    }
}

const getCart = async (req, res) => {
    try {
        const cart = await Cart.find()

        console.log(cart);

        if (!cart) {
            return res.status(400).json({ data: null, message: "Cart Not get" })
        }

        res.status(200).json({ data: cart, message: 'Cart Sucess get' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not get Cart' })
    }
}

const addCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body)

        console.log("cart", cart);

        if (!cart) {
            return res.status(400).json({ data: null, message: "Cart Not Difend" })
        }

        res.status(200).json({ data: cart, message: 'Cart Sucess Add' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Cart' })
    }
}

const deleteCart = async (req, res) => {
    try {
        console.log("req", req.params.id);

        const cart = await Cart.deleteOne({ "items._id": req.params.id })

        console.log("cart", cart);

    //    const deleteee=cart.Splice(req.params,1)

    //    console.log("deleteee",deleteee);
       

        if (!cart) {
            return res.status(400).json({ data: null, message: "Cart Not Delete" })
        }

        res.status(200).json({ data: cart, message: 'Cart Sucess Delete' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Delete Cart' })
    }
}

const upadateCart = async (req, res) => {
    try {

        let upadte = { ...req.body }
        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            upadte,
            { new: true }
        )

        console.log(cart);

        if (!cart) {
            return res.status(400).json({ data: null, message: "Cart Not Upadte" })
        }

        res.status(200).json({ data: cart, message: 'Cart Sucess Update' })
    } catch (error) {
        console.log(error);

        res.status(500).json({ data: null, message: 'Not Add Cart' })
    }
}

module.exports = {
    deleteCart,
    upadateCart,
    addCart,
    getCart,
    getAllCart
}