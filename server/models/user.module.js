const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
	name:{
		type:String,
		required:true,
	},
	email:String,
	mobile:Number
});

const userModel=mongoose.model("book",userSchema);

module.exports=userModel;