require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const routes = require("./routes/api/v1/index.js");
const ConnectionMongoDB = require('./db/MongoDB.js');
const { googleProvider, facebookProvider } = require('../server/passport.js');
// const facebookProvider = require('../server/passport.js');
const passport = require('passport');
const createSocket = require('../server/createSocket.js');


app.use(express.json())
app.use(cookieParser())
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static('public'))

googleProvider();
facebookProvider();
createSocket();

app.use(cors({
  origin: 'https://elevate-knowledge-eight.vercel.app',
  optionsSuccessStatus: 200,
  credentials: true
}))



ConnectionMongoDB();

// console.log(process.env.PORT)

//http://localhost:8080/api/v1
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('Welcome The LMS Backend')
})

// app.listen(process.env.PORT, () => {
//   console.log(`Server Started At ${process.env.PORT}`);
// })

module.exports = app;