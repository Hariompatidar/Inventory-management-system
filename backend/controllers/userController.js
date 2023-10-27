const User = require('../models/userModel') ; 
const bcrypt = require('bcrypt') ; 

const jwt = require('jsonwebtoken') ;


exports.registerUser = async(req , res)=>{
    try{
    
       const {name , email , password , confirmPassword ,  role   } = req.body ;

       if(!name || !email || !password || !confirmPassword || !role  ){
        return res.status(402).json({
            success : false ,
            message : "Please add all the fields"
        })
    }
    if(password.length < 6 || password.length > 20){
        return res.status(402).json({
            success : false , 
            message : "Please enter password ranging between 6 to 30 characters "
        })
    }

    if(password !== confirmPassword){ return res.status(402).json({
        success : false , 
        message : "Password does not match"
    })}

    const isPresent = await User.findOne({email : email }) ; 
    if(isPresent){
        return res.status(404).json({
            success : false , 
            message : "User already exist"
        })
    }
        
        const hashedPassword = await bcrypt.hash(password , 10) ;
        const data = await User.create({name , email , password : hashedPassword , role}) ; 

        return res.status(200).json({
            success : true , 
            message : "Successfully signed up" , 
            data : data
        })

    }catch(e){
        console.log(e.message) ; 
        return res.status(500).json({
            success : false , 
            message : e.message 
        })
    }
}



exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(402).json({
                success: false,
                message: "Please enter all the fields",
            });
        }

        const user = await User.find({ email });

        if (user.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No user exist for this account",
            });
        }
        

        const isValid = await bcrypt.compare(password, user[0]?.password);
        if (isValid) {
            const payload = {
                email: user[0].email,
                id: user[0]._id,
                role : user[0].role
                
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            console.log(token);

            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };
            
            return res.cookie("token", token, options).status(200).json({
                success: true,
                token: token,
                user,
                message: "Successfully logged in ",
            });
        } else {
            return res.status(402).json({
                success: false,
                message: "Incorrect Password",
            });
        }
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Can not get user",
            error: e.message,
        });
    }
};


