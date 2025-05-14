const jwt= require("jsonwebtoken");

// next is used after the function what work is to be done
const authenticateToken = (req, res, next)=>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];  // we use bearer token

    if(token ==null){
        return res.status(401).json({message: "Authentication token required"});
    }

    jwt.verify(token, "bookStore123", (err,user) =>{
        if(err) {
            return res.status(403).json({message:"Token Expired. Please signIn again"});
        }
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };