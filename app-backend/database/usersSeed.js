const users = require('./users');
const db = require('./setup')
const User = require('../Models/User');
const mongoose = require('mongoose');

async function createUser() {
    try {

        console.log("Starting User Seed 🌱🌱")
        await db();
        console.log("Saving... 💾")
        await User.insertMany(users);
        console.log("Users seed sucessful 🌻🌼🌷")
        mongoose.disconnect()
    } catch (error) {
        console.log(error.message + " ⚠⚠")
    }
}

createUser();
