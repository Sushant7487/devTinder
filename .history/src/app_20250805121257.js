const express = require("express");

const app = express();

app.use((req,res)=>{
    res.send("Hello From the Sever");
});

app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});