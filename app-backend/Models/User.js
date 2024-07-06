const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 25
    }, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 14
    },
    userID: {
        type: Number
    }

});

module.exports = mongoose.model('User', userSchema);