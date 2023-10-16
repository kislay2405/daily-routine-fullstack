const express=require("express")
const bodyParser=require("body-parser")
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let items=["stay focused"]

app.get("/",function (req,res) {
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date=today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
    res.render("list",{todayDate:date,newItems :items});
})

app.post("/",function (req,res) {
    let newTask=req.body.newTask;
    items.push(newTask);
    res.redirect("/");
})
app.listen(3000,function(){
    console.log("server port 3000.");
})