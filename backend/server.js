const express = require('express') ;
require('dotenv').config() ; 
const PORT = process.env.PORT
const cors = require('cors') ; 
const dbConnect = require('./config/ConnectDb') ;

const app = express() ;

app.use(express.json()) ;
app.use(cors()) ;

app.get('/' , (req , res)=> {res.send("Hello")}) ;
app.listen(PORT , ()=>{console.log(`Server started successfully at ${PORT}`)}) ;  
dbConnect() ; 




