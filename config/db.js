const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to mongodb Database ${mongoose.connect.host}`.bgMagenta.white)
    } catch (err) {
        console.log(`${err}`.bgRed.white)
    }
}

module.exports = connectDB;