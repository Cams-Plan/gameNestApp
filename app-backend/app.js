const express = require("express")
const cors = require('cors') //needed for connection between backend and frontend of the app
const app = express()

const upload = require('./routes/upload')

module.exports= app

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));

app.use("/imageupload", upload) ;