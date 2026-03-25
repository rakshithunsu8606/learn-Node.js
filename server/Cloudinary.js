const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECREATE // Click 'View API Keys' above to copy your API secret
});

const UpdateCloudinary = async (file, folder) => {
    try {
        const uploadResult = await cloudinary.uploader
            .upload(
                file, {
                public_id: 'shoes',
                folder: folder
            }
            )
            .catch((error) => {
                console.log(error);
            });

        console.log("uploadResult:", uploadResult)

        return {
            public_id: uploadResult.public_id,
            url: uploadResult.url
        }

    } catch (error) {
        console.log(error);
    }
}

const DeleteCloudinary = (public_id) => {
    console.log("public_id", public_id);

    try {
        const result = cloudinary.uploader.destroy(public_id, (err, result) => {
            console.log("result:", result);
            console.log("Error:", err);
        });

        console.log("Delete result:", result);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    UpdateCloudinary,
    DeleteCloudinary
}