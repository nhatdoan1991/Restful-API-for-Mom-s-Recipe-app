const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    last_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    }
});

module.exports= mongoose.model('Users',UserSchema);