const mongoose =require('mongoose')

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
       
        
        
    },
    password:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean
    }
},{timestamp:true}
);

const Users =mongoose.model("users" ,userSchema)
   
module.exports =Users 


