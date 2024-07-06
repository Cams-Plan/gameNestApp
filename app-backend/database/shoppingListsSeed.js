const shoppingLists = require('./shoppingLists')
const db = require('./setup')
const mongoose = require('mongoose');
const ShoppingList = require('../Models/ShoppingList');


async function createShoppingLists() {
    try {

        console.log("Starting shopping lists Seed 🌱🌱")
        await db();
        console.log("Saving... 💾")
        await ShoppingList.insertMany(shoppingLists);
        console.log("Shopping lists seed sucessful 🌻🌼🌷")
        mongoose.disconnect()
    } catch (error) {
        console.log(error.message + " ⚠⚠")
    }
}

createShoppingLists();