const mongoose = require("mongoose");

const db = async () => {
    try {
        connectionParams = {
            useNewUrlParser  : true,
            useUnifiedTopology : true
        };

        await mongoose.connect(process.env.DATABASE_URL,connectionParams);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = db;