const fs = require('fs')
const db = require('./db.js')
const sql = fs.readFileSync('./database/setup.sql').toString()


db.query(sql)
    .then(data => console.log('set-up complete'))
    .catch(error => console.log(error))