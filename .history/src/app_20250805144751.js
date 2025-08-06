const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("HellOn");
});

app.get("/user/:id",(req,res)=>{
    console.log(req.params);

    res.send({ firstName: "Sushant", lastName: "Telekune"});

});



app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});