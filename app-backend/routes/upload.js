const express = require('express')
const router = express.Router();
const imageServices = require('../controllers/imageServices')

router.post('/',imageServices.uploadImage);

module.exports = router