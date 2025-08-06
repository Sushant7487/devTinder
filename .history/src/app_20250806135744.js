const express = require("express");

const app = express();

app.use("/test",(req,res,next)=>{
    next();
    res.send("Test Route 1");
},(req,res)=>{
    res.send("Test Route 2");

});


app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});