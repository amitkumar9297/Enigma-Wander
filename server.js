const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require("./config/db");
const userRouter = require("./routes/userRouter");
const blogRouter = require('./routes/blogRouter');

PORT = process.env.PORT || 8000;

// rest object
const app = express();

// env config
dotenv.config();

// mongodb connection
connectDB();

// middleware
app.use(cors())
app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/blog', blogRouter);
app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static(path.join(__dirname, 'public/')));

// app.get('/', (req, res) => {
//     res.send("hello")
// })

// port

app.listen(PORT, () => { console.log(`server is running at port ${PORT}`.bgCyan.white); })