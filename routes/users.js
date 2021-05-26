const express = require ('express');
const router = express.Router();
const Users = require('../models/User');
const { MongoClient } = require("mongodb");

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const url = process.env.DB_CONNECTION;
const client = new MongoClient(url);
const dbName = "API_GRAPHQL";
 // The database to use


router.get('/', async (req,res)=>{

    try{
        const users = await Users.find()
        res.json(users)
    }catch(err){
        res.json({message: err})
    }
 
});

router.post('/', async(req,res)=>{
    console.log(req.body)
    const user = new Users({
        name:{
            first_name: req.body.first_name,
            last_name:req.body.last_name
        },
        birthday:req.body.birthday
    })
    try{
        const savedUser = await user.save();
        res.json(savedUser)
    }catch(err){
        res.json({message:err})
    }
  
});


module.exports = router;    