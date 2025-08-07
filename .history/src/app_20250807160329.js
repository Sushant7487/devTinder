const  { adminAuth } = require("./middlewares/auth");
const express = require("express");

const app = express();


app.use("/user", adminAuth );

app.get("/user/getAllData", (req,res)=>{
    res.send("All Data is Sending");
});
app.post("/user/login", (req, res)=>{
    res.send("You Logged in");
});

app.delete("/user/deleteAllData", (req,res)=>{
    res.send("All Data is Deleting");
});




app.listen(3000, ()=>{
    console.log("Server is Successfully Listening on Port 3000");
});