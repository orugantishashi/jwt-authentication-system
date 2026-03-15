const deleteFromCloudinary = require('../helpers/imgdeletehelper');
const Image = require('../models/Image');

const deleteImageController = async (req, res) => {
    try {
        const currentUserId = req.user.userid;   // logged in user
        
        const imgId = req.params.id;             // publicId from URL
       
        // 1. Find image in DB
        const image = await Image.findOne({ publicId: imgId });
        console.log(image)

        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found"
            });
        }

        // 2. Check uploader
       if (image.uploadedBy.toString() !== currentUserId) {
            return res.status(403).json({
                success: false,
                message: "Access denied. Only uploader can delete."
            });
        }
        // 3. Delete from Cloudinary
        await deleteFromCloudinary(imgId);

        // 4. Delete from DB
        await Image.deleteOne({ publicId: imgId });

        res.status(200).json({
            success: true,
            message: "Image deleted successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = deleteImageController;