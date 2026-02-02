require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express();


app.use(express.json())
app.use('/public',  express.static('public'))

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  credentials:true
}))

const routes=require("./routes/api/v1/index.js");
const ConnectionMongoDB = require('./db/MongoDB.js');

ConnectionMongoDB();

console.log(process.env.PORT)

//http://localhost:8080/api/v1
app.use('/api/v1',routes)

app.listen(process.env.PORT, () => {
    console.log(`Server Started At ${process.env.PORT}`);
    
})