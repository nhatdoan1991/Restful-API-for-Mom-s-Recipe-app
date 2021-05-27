const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    name:{
        last_name: {
            type: String,
            required: true
        },
        first_name: {
            type: String,
            required: true
        }
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: false,
    }
    
});
const SALT_ROUND =12;

UserSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(SALT_ROUND)
        const hashedPassword = await bcrypt.hash(this.password,salt)
        this.password= hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

module.exports= mongoose.model('Users',UserSchema);