const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
    res.send("This is the root for Mom's Recipe App");
});

//Connect to MongoDB through mongoose
let url = "mongodb+srv://nkapi:"+process.env.PASSWORD+"@apigraphql.6f6sy.mongodb.net/API_GRAPHQL?retryWrites=true&w=majority"
console.log(url)
mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log('connected to DB');
})


app.listen(port);