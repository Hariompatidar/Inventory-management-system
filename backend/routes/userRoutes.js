const express = require('express') ;
const router = express.Router() ; 
const {registerUser ,  loginUser} = require('../controllers/userController') ;
const {isAdmin} = require('../middlewares/authMiddleware')


router.post("/register" , isAdmin ,registerUser  ) ;
router.post("/login" , loginUser) ; 



module.exports =  router  ; 