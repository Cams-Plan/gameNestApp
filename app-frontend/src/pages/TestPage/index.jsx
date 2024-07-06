import axios from 'axios'

const UploadImages = () => {
    const onSelectFile = async (e) => {
            const file = e.target.files[0];
            const convertedFile = await convertToBase64(file);
            const s3URL = await axios.post(
              `${import.meta.env.VITE_API_URL}/imageupload/`,
                {
                    image: convertedFile,
                    imageName: file.name,
                    imageType: file.type
                }
            );
    }

    const convertToBase64 = (file) => { 
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    return (
        <input type="file" accept="image/*" onChange={onSelectFile} />
    )
}
    
export default UploadImages