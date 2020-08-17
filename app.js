var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Img = require("./models/img");

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sanyika:Nem99@cluster0.hg5xp.mongodb.net/orders?retryWrites=true&w=majority")
methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{Img.find({},(err,found)=>{
	if(err){console.log(err)}
	
	else{console.log(found)
		var img=found[Math.floor(Math.random()*found.length)]
		
		
		res.render("show.ejs",{img:img})}
	
	
})})

app.post("/",(req,res)=>{Img.create(req.body.img,(err,newly)=>{
	if(err){console.log(err)}
	
	else{res.redirect("/")}
	
	
})})
	
	
	


	


























	app.listen(process.env.PORT);



