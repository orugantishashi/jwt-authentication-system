const cloudinary = require("cloudinary").v2;

const cloudName = (process.env.CLOUDINARY_CLOUD_NAME || "").trim();
const apiKey = (process.env.CLOUDINARY_API_KEY || "").trim();
const apiSecret = (process.env.CLOUDINARY_API_SECRET || "").trim();

const invalidSecretValues = new Set([
    "your_cloudinary_api_secret",
    "your_api_secret",
    "api_secret",
]);

if (
    !cloudName ||
    !apiKey ||
    !apiSecret ||
    invalidSecretValues.has(apiSecret.toLowerCase()) ||
    apiSecret === apiKey
) {
    throw new Error(
        "Invalid Cloudinary config: set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and the real CLOUDINARY_API_SECRET from Cloudinary Dashboard (API Secret must not equal API Key)."
    );
}

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
});

module.exports = cloudinary;
