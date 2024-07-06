const {Router} = require('express');
const router = Router();

const imageServices = require('../controllers/imageServices')

router.post('/', imageServices.uploadImage)




module.exports = router