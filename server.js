const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const userRouter = require("./routes/userRouter");
PORT = process.env.PORT || 8000;

// rest object
const app = express();

// env config
dotenv.config();

// mongodb connection
connectDB();

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"));

// routes
// app.use('/api/v1/blog', userRouter);

app.get('/', (req, res) => {
    res.send("hello")
})

// port

app.listen(PORT, () => { console.log(`server is running at port ${PORT}`.bgCyan.white); })