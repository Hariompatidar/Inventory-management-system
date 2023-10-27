const Product = require("../models/productModel");
const uploadToCloudinary = require("../utils/uploadFile") ; 

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        let imageUrl ="" ; 
        
        const image = req.files.file ; 
        

        if(!name || !description || !stock || !price ) {
            return res.status(402).json({
                success : false , 
                message : "Please enter all the fields"
            })
        }

        const isPresent = await Product.findOne({ name: name });
        
        if(isPresent) {
            return res.json({
                success: false,
                message: "Product already exist",
            });
        }

        if(image){
        const supportedImage = ["jpg" , "jpeg" , "png"]; 
        const imageType = image.name.split(".")[1] ; 
        if(! supportedImage.includes(imageType)){
            return res.status(402).json({
                success : false  , 
                message : "Image type is not supported "
            })
        }

        const response = await  uploadToCloudinary(image , "Inventory") ; 
        imageUrl = response.secure_url 
         
}
        

        const data = await Product.create({ name, description, price, stock , quantityLeft : stock , soldQuantity : 0 , image : imageUrl});

        res.status(200).json({
            success: true,
            message: "Product inserted successfully",
            data: data
        });
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};


exports.fetchAllProducts = async(req , res)=>{
    try{

        const data = await Product.find({}) ; 

        return res.json({success : true , 
                        message : "Successfully fetched all the products",
                        data : data}) ;

    }catch(e){
        return res.status(500).json({
            success : false , 
            message : "Unable to fetch the products"
        })
    }
}


exports.getProductDetails = async(req , res)=>{
    try{
         const {id } = req.body  ; 
        

         const data = await Product.findOne({_id : id }) ; 

         return res.status(200).json({
            success : true  , 
            message :"Successfully fetched the product details" ,
            data : data 
         })
    }catch(e){
        return res.status(500).json({
            success : false , 
            message : "Unable to fetch the product details"
        })
    }
}


exports.sellProduct = async(req , res)=>{
    try{
    const {id , productsSold } = req.body ; 
    
    const response = await Product.findById(id) ;
    

    if( !response){return res.status(402).json({success : false , message : "Product can not be found"})} 
    else if( response.quantityLeft === 0 ){ return res.status(402).json({success : false , message : "Stock alread out of stock"})} 

    const newData = await Product.findByIdAndUpdate(id , {$inc : {soldQuantity :productsSold  , quantityLeft : -productsSold } } , {new : true })
    console.log(newData) ;

    res.status(200).json({
        success : true  , 
        message : "Successfully sold " , 
        data : newData  
    })
}catch(e){
    console.log(e.message) ;
    return res.status(500).json({
        success : false , 
        message : "Unable to sell product" , 
        error : e.message
    })
}
}

exports.addStock = async(req , res)=>{
    try{

        const {id , stockAdded} = req.body ;
        const response = await Product.findById(id) ;
    

        if( !response){return res.status(402).json({success : false , message : "Product can not be found"})} 

        const newData = await Product.findByIdAndUpdate(id , {$inc : {stock : stockAdded  , quantityLeft : stockAdded } } , {new : true })
        console.log(newData) ;
    
        res.status(200).json({
            success : true  , 
            message : "Successfully sold " , 
            data : newData  
        })

    }catch(e){
        console.log(e.message) ; 
        return res.status(500).json({
            success : false , 
            message : "Unable to add Stock" , 
            error : e.message
        })
    }
}