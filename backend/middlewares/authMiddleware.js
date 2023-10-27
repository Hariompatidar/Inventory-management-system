
const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
require('dotenv').config();



exports.auth = async (req, res, next) => {

    try {
        //extract token 
        const token = req.cookie.token || req.body.token ||  req.headers?.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'token is missing '
            })

        }
     console.log(token)
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);
        const isUser = await User.findOne({_id : decode.id}) ;
        if(!isUser){
            return res.status(400).json({
                success : false , 
                message : "Not an authorized user" 
            })
        }
        req.user = decode;
        next();
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'error in token handling',
            error: e.message
        })
    }

}


exports.isSalesman = async (req, res, next) => {

    try {
         const role = req.body.role ; 
         if( role !== 'Salesman'){
            return res.status(401).json({
                success : false ,
                message : 'This route is for Salesman only '
            })
         }
         next() ; 
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Error in isSalesman middleware',
            error: e.message
        })
    }


}


exports.isAdmin = async (req, res, next) => {

    try {
         const role = req.body.role ; 
         if( role !== 'Admin'){
            return res.status(401).json({
                success : false ,
                message : 'This route is for Admin only '
            })
         }
         next() ; 
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Error in isAdmin middleware ',
            error: e.message
        })
    }


}