const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
require("dotenv").config()


//middlewares
app.use(express.json());




app.use("/",userRouter);
app.listen(process.env.PORT , ()=>{
console.log(`Server running at ${process.env.PORT}`)
})