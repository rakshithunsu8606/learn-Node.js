// const Terms = require("../Model/Terms.model")
const fs = require("fs");
const pool = require("../db/Mysql");

console.log("hello");

const getAllTerms = async (req, res) => {
    // #swagger.tags = ['Terms']

    try {
        const [rows] = await pool.query('SELECT * FROM terms ');

        console.log(rows);

        res.status(200).json({
            success: true,
            data: rows,
            message: "All Terms defind"
        })


    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            data: [],
            message: "Incress Not Difind(getAllTerms)" + error.message
        })
    }
}

const getTerms = async (req, res) => {
    // #swagger.tags = ['Terms']

    // try {
    //     console.log(req.params.id);

    //     const terms = await pool.query('SELECT * FROM terms')

    //     if (!terms) {
    //         return res.status(400).json({ data: null, meassage: "getTerms Not added" })
    //     }

    //     return res.status(200).json({ data: terms, meassage: "getTerms added Sucessfully" })
    // } catch (error) {
    //     return res.status(500).json({ data: null, meassage: "Incress Not define getTerms" + error.meassage })
    // }
}

const addTerms = async (req, res) => {
    // #swagger.tags = ['Terms']
    try {
        const { name, description } = req.body

        const [rows] = await pool.query(
            "INSERT INTO terms (name , description) VALUES (? , ? )",
            [name, description]
        );

        const [result] = await pool.query(`SELECT * FROM terms WHERE id=${rows.insertId}`);


        res.status(200).json({
            success: true,
            data: result[0],
            message: "Terms added successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: "Incress Not Difind(addTerms)" + error.message
        })
    }
}

const updateTerms = async (req, res) => {
    // #swagger.tags = ['Terms']
    try {
        const { name, description } = req.body
        const data = req.params.id
        const [rows] = await pool.query(
            "UPDATE terms SET name = ?, description = ? WHERE id = ?",
            [name, description, data]

        );

        const [result] = await pool.query(`SELECT * FROM terms WHERE id=${req.params.id}`);

        res.status(200).json({
            success: true,
            data: result[0],
            message: "Terms Update successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: "Incress Not Difind(updateTerms)" + error.message
        })
    }
}

const deleteTerms = async (req, res) => {
    // #swagger.tags = ['Terms']
    try {
        const data1 = [req.params.id]
        const [result] = await pool.query("DELETE FROM terms WHERE terms.id = ?", data1);

        console.log(result);

        res.status(200).json({
            success: true,
            data: null,
            message: "Terms delete successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: "Incress Not Difind(deleteTerms)" + error.message
        })
    }
}

const activeTerms = async (req, res) => {
    // #swagger.tags = ['Terms']
}

module.exports = {
    getAllTerms,
    getTerms,
    addTerms,
    updateTerms,
    deleteTerms,
    activeTerms
}