const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    blogid: {
        type: mongoose.Types.ObjectId
    },
    user: {
        type: mongoose.Types.ObjectId
    },
    comment: {
        type: String
    }
},
    { timestamps: true }
);

const commentModel = new mongoose.model("Comment", commentSchema, "Comment");

module.exports = commentModel;