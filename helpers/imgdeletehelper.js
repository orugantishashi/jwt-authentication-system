const cloudinary = require('../config/cloudinary')
const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId)
        return result
    } catch (error) {
        console.log("error while deleting", error)
        throw new Error("error while deleting")
    }
}
module.exports = deleteFromCloudinary
           