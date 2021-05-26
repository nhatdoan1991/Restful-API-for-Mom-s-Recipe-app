const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv/config');



//Import routes

const usersRoute = require('./routes/users');

// Middlerwares
app.use('/users',usersRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes 
app.get('/',(req,res)=>{
    res.send('We not home');
});

//Connect to MongoDB

mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log('connected to DB');
})


app.listen(3000);