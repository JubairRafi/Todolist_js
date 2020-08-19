const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use('view engine' 'ejs');

app.get("/", function(req,res){
  var today = new Date();

  if (today.getDay() === 6|| today.getDay() === 0){
    res.send("yoyyo its weekend");
  }else{
    res.sendFile(__dirname +"/index.html");
  }
});



app.listen(3000,()=>{
  console.log("ss");
});
