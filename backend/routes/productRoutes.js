const express = require("express") ; 
const router = express.Router() ;
const {createProduct, fetchAllProducts, getProductDetails, sellProduct} = require('../controllers/productController') ; 

router.post("/createproduct" , createProduct)
router.get("/fetchall" , fetchAllProducts) ; 
router.post("/fetchdetails" , getProductDetails)
router.post("/sellProduct" , sellProduct)
module.exports = router ; 

