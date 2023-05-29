const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
require("dotenv").config()
const db = require("./config/connection");
const cors = require("cors");
const PORT = 8080

app.use(cors())


 db(()=>{
try {
    console.log("Database connected successfully")
} catch (error) {
    console.log("Database connection failed")
}
})

//middlewares
app.use(express.json());




app.use("/api",userRouter);
app.listen(PORT , ()=>{
console.log(`Server running at ${`http://localhost:${PORT}`}`)
})