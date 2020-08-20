const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items =["buy food","cook food", "eat food"];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extenden:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  let today = new Date();

  var options ={
    weekday:"long",
    day: "numeric",
    month:"long"
  };

  let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindofday: day, newListItems: items });
});

app.post("/",(req,res)=>{
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});



app.listen(3000,()=>{
  console.log("ss");
});
