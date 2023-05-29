
const jwt =require("jsonwebtoken");
const  User  = require("../model/userModel")

const verifyJWT = async(req,res,next) => {
  const token = req.headers.authorization;
try {
  const decoded = await jwt.verify(token, "secrete");
  const userId = decoded.userId;
  User.findById(userId).then((user)=>{
    if(user){
      res.locals = user;
        next()
      }else{
        res.send("Invalid token")
      }
    })

  } catch (error) {
    res.json({messge:"Invalid Token"})
    console.log(error)
    
  }

}

exports.verifyJWT = verifyJWT;