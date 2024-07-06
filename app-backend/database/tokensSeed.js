const tokens = require('./tokens')
const db = require('./setup')
const mongoose = require('mongoose');
const Token = require('../Models/Token');


async function createToken() {
    try {

        console.log("Starting Token Seed 🌱🌱")
        await db();
        console.log("Saving... 💾")
        await Token.insertMany(tokens);
        console.log("Tokens seed sucessful 🌻🌼🌷")
        mongoose.disconnect()
    } catch (error) {
        console.log(error.message + " ⚠⚠")
    }
}

createToken();