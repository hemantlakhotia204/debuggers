const express = require('express');
const request = require('request');
const app=express();


app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});






app.listen(3000, ()=>{
  console.log("Server started");
});