console.log("First LIne of code successfully.");
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const userModel=require('./models/user.module');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/hmsDB");

userModel({
	name:"hemang",
	email:"hemang9999@gmail.com",
	mobile:"9988776655"
}).save();

app.get('/booking',(req,res)=>
{
	res.send(`<h1>${userModel.findById(2)}</h1>`);
})
app.get('/',(req,res)=>
{
	res.send("<h1>Hemang</h1>");
})

app.get('/form',(req,res)=>
{
	res.send("<h1>Hello form</h1>")
});


app.listen(8000,()=>
{
	console.log("Server running on port 8000");
});