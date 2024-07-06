const mongoose = require("mongoose")

// set params we want for our db
mongoose.set("strictQuery", false); // strictQuery is false to avoid query errors returning all values for a collection - check ticket

const mongoDB = process.env.DB_CONNECTION || "mongodb://localhost:27017/fps-app-default"

async function connectDB(){
    // error handling done on the index.js
        await mongoose.connect(mongoDB)
    
}

module.exports = connectDB;
