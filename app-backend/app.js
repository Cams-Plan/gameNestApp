const express = require("express")
const cors = require('cors') //needed for connection between backend and frontend of the app
const app = express()

const upload = require('./routes/upload')
const minesweeper = require('./routes/mineSweeper')

module.exports= app

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));

app.use("/imageupload", upload);
app.use("/gn-minesweeper", minesweeper);



// CATCH ALLS

app.post("/*", (req,res) => {
    res.status(502).send({
        "error": "request not allowed".toUpperCase()
    }) // return unauthorized response or request not available response
})

app.put("/*", (req,res) => {
    res.status(502).send({
        "error": "request not allowed".toUpperCase()
    }) 
})

app.patch("/*", (req,res) => {
    res.status(502).send({
        "error": "request not allowed".toUpperCase()
    }) 
})

app.delete("/*", (req,res) => {
    res.status(502).send({
        "error": "request not allowed".toUpperCase()
    }) 
})

