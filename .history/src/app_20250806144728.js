const express = require("express");

const app = express();

app.use("/user", (req,res, next)=>{
    const token = "xyz";
    const isAuthorized = token === "xyz" ;

    if(!isAuthorized){
        res.status(404).send("You have not Authorized..!");
    }else{
        next();
    }

});

app.get("/user/getAllData", (req,res)=>{
    res.send("All Data is Sending");
});

app.delete("/user/deleteAllData", (req,res)=>{
    res.send("All Data is Deleting");
});


app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});