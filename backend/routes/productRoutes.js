const express = require("express") ; 
const router = express.Router() ;
const {createProduct, fetchAllProducts, getProductDetails, addStock, deleteStock} = require('../controllers/productController') ; 
const {auth , isAdmin} = require("../middlewares/authMiddleware") ; 

router.post("/createproduct" ,isAdmin , createProduct)
router.get("/fetchall" , fetchAllProducts) ; 
router.post("/fetchdetails" , getProductDetails)

router.post("/addstock" , auth ,  addStock)
router.post("/deletestock" , auth , isAdmin  ,   deleteStock)
module.exports = router ; 

