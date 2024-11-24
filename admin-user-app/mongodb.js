const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Login')
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log("failed to connected");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collect",LogInSchema)
module.exports=collection