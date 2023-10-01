const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId
    },
    comment: {
        type: string
    }
},
    { timestamps: true }
);