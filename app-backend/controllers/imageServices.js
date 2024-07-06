const ImageServices = require('../services/ImageServices')

async function uploadImage(req, res, next){

    const base64Image = req.body.image;
    const imageName = req.body.imageName;
    const type = req.body.imageType;

  
    try {
        response = await ImageServices.upload(imageName, base64Image, type);
        res.status(201).send({ link: response });
    } catch (err) {
        console.error(`Error uploading image: ${err.message}`);
        res.status(500).send({ error: `Error uploading image: ${imageName}` });
    }

}

module.exports = {uploadImage}

