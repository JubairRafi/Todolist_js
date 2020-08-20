const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items =["buy food","cook food", "eat food"];
let workTIems =[];


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

    res.render("list", {listTile: day, newListItems: items });
});

app.post("/",(req,res)=>{
  let item = req.body.newItem;

  if (req.body.list ==="Work") {
    workTIems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",(req,res)=>{
  res.render("list",{listTile: "Work", newListItems: workTIems });
});

app.listen(3000,()=>{
  console.log("ss");
});
