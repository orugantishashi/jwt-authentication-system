const Image = require('../models/Image')
const uploadToCloudinary = require('../helpers/cloudinaryHelpers')
const fs = require('fs')
const uploadImageController= async(req,res)=>{
    try {
        //check if file is missing 
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"file is requried"
            })
        }
        //upload 
        const { url, publicId } = await uploadToCloudinary(req.file.path)
        //store the img adnd url an public id 
         const newlyUploadedImage= new Image({
             url,
             publicId,
            uploadedBy: req.user.userid
         })

        await newlyUploadedImage.save();
        // delete from localhost after upload
        fs.unlinkSync(req.file.path)

        res.status(201).json({
            success:true,
            message:"img uploaded successfully",
            image: newlyUploadedImage
        })
    } catch (error) {
       console.log(error);
       res.status(500).json({
        success: false,
        message:"something went wrong! please try again"
       })

    }

}

// pagination part
const fetchImagescontroller =async (req,res)=> {
    try{

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt( req.query.limit) || 2;
        const skip = (page-1) * limit;
        const sortBy = req.query.sortBy || "createdAt";
        const sortOrder = req.query.sortOrder === 'asc' ? 1:-1
        totalimgs = await Image.countDocuments();
        totalpages =  Math.ceil(totalimgs/limit)
        const sortObj = {}
        sortObj[sortBy] = sortOrder
        const images = await Image.find().sort(sortObj).skip(skip).limit(limit)
        
        if(images){
            res.json({
                success: true,
                currentPage: page,
                pages: totalpages,
                Totalimages: totalimgs,
                skipped: skip,
                data:images

            });

        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "somthing went in pagination part so please try again "
        })
}
}

module.exports={
    uploadImageController, 
    fetchImagescontroller,  
};
