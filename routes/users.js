const express = require ('express');
const router = express.Router();
const Users = require('../models/User');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
// Get all user
router.get('/', async (req,res)=>{

    try{
        const users = await Users.find()
        res.json(users)
    }catch(err){
        res.json({message: err})
    }
 
});
//Create new user base on User model
router.post('/', async(req,res)=>{
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
//find specific user
router.get('/:userId', async(req,res)=>{
    try{
        const user = await Users.findById(req.params.userId)
        res.json(user)
    }catch(err){
        res.json({message:err})
    }

})
//delete a user
router.delete('/:userId', async(req,res)=>{
    try{
        const removeUser = await Users.remove({_id: req.params.userId})
        res.json(removeUser)
    }catch(err){
        res.json({message:err})
    }
})

//edit a user
router.patch('/:userId', async(req,res)=>{
    try{
        const updatedUser = await Users.updateOne({_id: req.params.userId},{
            $set: {
                name:{
                    first_name: req.body.first_name,
                    last_name:req.body.last_name
                },
                birthday:req.body.birthday
            }
        })
        res.json(updatedUser)
    }catch(err){
        res.json({message:err})
    }
})


module.exports = router;    