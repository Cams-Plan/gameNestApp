const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const currentDate = new Date(Date.now());
// const formattedDate = currentDate.toISOString().slice(0, 10); 
// the above two lines were being used to format the date

const tokenSchema = new Schema({

    token: {
        type: String,
        required: true,
    }, 
    startDate: {
        type: Date,
        default: Date.now(),
        
    },  
    // expiration: {
    //     type: Date,
    //     //expires: 3600
    // },
    userID: {
        type: Number
    }

});


module.exports = mongoose.model('Token', tokenSchema);