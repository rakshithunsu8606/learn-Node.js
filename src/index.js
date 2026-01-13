require('dotenv').config()
const express = require("express");

const app = express();

app.use(express.json())
app.use(express.static('public'))

const routes=require("./routes/api/v1/index.js");
const ConnectionMongoDB = require('./db/MongoDB.js');

ConnectionMongoDB();

console.log(process.env.PORT)

//http://localhost:8080/api/v1
app.use('/api/v1',routes)

app.listen(process.env.PORT, () => {
    console.log(`Server Started At ${process.env.PORT}`);
    
})