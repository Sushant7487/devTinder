const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("HellOn");
});

app.get("/user",(req,res)=>{
    res.send({ firstName: "Sushant", lastName: "Telekune"});

});

app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});