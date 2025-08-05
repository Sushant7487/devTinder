const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("HellOn");
});

app.get("/user",(req,res)=>{
    res.send({ firstName: "Sushant", lastName: "Telekune"});

});

app.post("/user",(req,res)=>{
    console.log("Data is sending to DB");
    res.send("Data is Successfully SAVED TO DB");

});

app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});