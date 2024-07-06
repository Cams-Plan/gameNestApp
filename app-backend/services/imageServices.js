const AWS = require('aws-sdk')
const s3 = new AWS.S3({})
const BUCKET_NAME = process.env.IMAGES_BUCKET

const AWSconfig = {
     region: "eu-west-2",
}

AWS.config.update(AWSconfig)

async function upload(imageName, base64Image, type) {
    const params = {
        Bucket: `${BUCKET_NAME}`,
        Key: imageName,
        Body: new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        ContentType: type,
    };

    try {
       const data = await promiseUpload(params);
       console.log(`THIS IS THE DATA RETURNED FROM UPLOADING --- ${data.Location}`)
       return data.Location;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function promiseUpload(params) {
    try {
        const data = await s3.upload(params).promise();
        console.log(data)
        return data;
    } catch (err) {
        throw err;  
    }
}


module.exports = {upload}