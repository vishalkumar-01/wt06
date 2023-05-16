const express=require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/lab",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log(Error);
})
const logindesgin=new mongoose.Schema({
    fr:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    cl:{
        type:String,
        required:true
    },
    ad:{
        type:Number,
        required:true
    },
    ch:{
        type:Number,
        required:true
    },
    in:{
        type:Number,
        required:true
    },
    tt:{
        type:Number,
        required:true
    }
});
const collection = new mongoose.model("siginin",logindesgin);
module.exports=collection;