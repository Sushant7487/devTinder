const adminAuth = (req,res, next)=>{
    const token = "xyz";
    const isAuthorized = token === "xy" ;

    if(!isAuthorized){
        res.status(404).send("You have not Authorized..!");
    }else{
        next();
    }

};

module.exports = {
    adminAuth;
    
}