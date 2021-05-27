const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let url = "mongodb+srv://nkapi:Khongbiet321@apigraphql.6f6sy.mongodb.net/API_GRAPHQL?retryWrites=true&w=majority"
let port = process.env.PORT || 3000

require('dotenv/config');

//Import routes

const usersRoute = require('./routes/users');

// Middlerwares
app.use('/users',usersRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes 
app.get('/',(req,res)=>{
    mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
        res.json('connected to DB'+url);
    })
});

//Connect to MongoDB through mongoose

mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log('connected to DB');
})


app.listen(port);