const mongoose = require('mongoose');

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
    birthday: {
        type: Date,
        required: false,
    }
    
});

module.exports= mongoose.model('Users',UserSchema);