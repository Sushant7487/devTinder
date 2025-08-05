const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("HellO");
});

app.use("/hello/2",(req,res)=>{
    res.send("Very GOOD FROM SEREGR");
});

app.use("/hello",(req,res)=>{
    res.send("Hello From the Sever");
});

app.use("/",(req,res)=>{
    res.send("  Sush");
});

app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});