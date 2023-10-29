const Product = require('../models/productModel') ;
const Sale = require('../models/saleModel');
const User = require('../models/userModel') ;  


exports.sellProduct = async(req , res)=>{
    try{
    const {  id , productsSold , buyer  } = req.body ; 
    console.log(req.body) ;
    
    const response = await Product.findById(id) ;
    
    if( !response){return res.status(402).json({success : false , message : "Product can not be found"})} 
    else if( response.quantityLeft === 0 || response.quantityLeft < productsSold ){ return res.status(402).json({success : false , message : "Stock already out of stock"})} 
  
    await Product.findByIdAndUpdate(id , {$inc : {soldQuantity :productsSold  , quantityLeft : -productsSold }})
    const newData = await Sale.create({buyer , seller : req.user.id  ,  product : id , quantity : productsSold})
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