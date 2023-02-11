const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const cv = require("./controllers/cvController")

mongoose.connect("mongodb://localhost:27017/emart").then(()=>{
    console.log("Connection Established...");
}).catch((err)=>{
    console.log(err);
})

const app = new express()
app.set("view engine", "pug")
app.set("views", "./views")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req, res)=>{ 
    res.render("cv")
})

app.post("/cv", cv.insertCV)
app.get("/cvs", cv.findCVs)
app.post("/filter", cv.filterCVs)

app.listen(8080, ()=>{
    console.log("Server Started...");
})