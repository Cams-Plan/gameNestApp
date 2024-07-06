const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shoppingListSchema = new Schema({

    listName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    }, 
    id: {
        type: Number,
        required: true
    },
    url: {
        type: String,
    },
    userID: {
        type: Number
    },
    listItem: [{
        itemName: {
            type: String,
            required: true
        },
        itemQuantity: {
            type: Number,
            required: true
        },
        itemImage: {
            type: [String],
            validate: {
                validator: function (images) {
                    return images.length <= 2;
                },
                message: 'itemImage should have a maximum of 2 entries'
            }
        },
        maxPricePerUnit: {
            type: mongoose.Schema.Types.Mixed
        }  
    }]

});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);