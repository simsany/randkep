var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Img = require("./models/img");
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sanyika:Nem99@cluster0.hg5xp.mongodb.net/orders?retryWrites=true&w=majority")
methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{Img.find({},(err,found)=>{
	if(err){console.log(err)}
	
	else{
			var notEmpty=[];
		for(let i=0;i<found.length;i++){
		if(found[i].src!=""){
			notEmpty.push(found[i])
			
			
		}
		
		
	}
		var img=notEmpty[Math.floor(Math.random()*notEmpty.length)]
		
		
		res.render("show.ejs",{img:img})}
	
	
})})

app.post("/",(req,res)=>{Img.create(req.body.img,(err,newly)=>{
	if(err){console.log(err)}
	
	else{res.redirect("/")}
	
	
})})
	
	app.get("/image",(req,res)=>{Img.find({},(err,found)=>{
		
	if(err){console.log(err)}
	
	else{
		var notEmpty=[];
		for(let i=0;i<found.length;i++){
		if(found[i].src!=""){
			notEmpty.push(found[i])
			
			
	}}
		var img=notEmpty[Math.floor(Math.random()*notEmpty.length)]
		
		
		res.send(img)}
	
	
})})
	


	


























	app.listen(process.env.PORT);



