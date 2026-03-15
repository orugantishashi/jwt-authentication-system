const express= require('express');
const router = express.Router()
const authMiddleware = require("../middelware/middelware");
const isAdmin = require("../middelware/admin-middelware");
const uploadMiddleware = require('../middelware/upload-middleware')
const { uploadImageController, fetchImagescontroller } = require('../Controllers/image-controller')


//upload img
router.post('/upload',
    authMiddleware,
    isAdmin,
     uploadMiddleware.fields([
        { name: "file", maxCount: 1 },
        { name: "image", maxCount: 1 }
     ]),
     (req, res, next) => {
        const uploadedFile = req.files?.file?.[0] || req.files?.image?.[0];
        if (uploadedFile) {
            req.file = uploadedFile;
        }
        next();
     },
     uploadImageController);



router.get('/getimg',
   authMiddleware,
   fetchImagescontroller)
module.exports=router
