require('dotenv').config()
const express = require("express");

const app = express();

console.log(process.env.PORT)

app.get('/Category/getCategory', (req, res) => {
    res.status(200).json({id:101,name:'abc'})
})

app.post('/Category/addCategory', (req, res) => {
    res.status(200).json({method:'Category added Sucessfully'})
    console.log(req.body);
    
})

app.put('/Category/updateCategory/:id', (req, res) => {
    const id=req.params.id

    res.status(200).json({method:'Category update Sucessfully'})
})

app.delete('/Category/deleteCategory/:id', (req, res) => {
    const id=req.params.id

    res.status(200).json({method:'Category delete Sucessfully'})
})

app.listen(process.env.PORT, () => {
    console.log(`Server Started At ${process.env.PORT}`);
    
})