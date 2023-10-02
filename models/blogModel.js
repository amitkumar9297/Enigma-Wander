const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required"],
        trim: true,
        maxlength: 100,
    },
    discription: {
        type: String,
        required: [true, "Discription is Required"],
        maxlength: 300
    },
    entireBlog: {
        type: String,
        required: [true, "Title is required"],
        minlength: 500
    },
    image: {
        type: String,
        required: [true, "image is required"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "userId is required"]
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    comment: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }
    ],
    tags: [
        {
            type: String
        }
    ],
    category: {
        type: String,
        required: [true, "category is required"]
    }

},
    { timestamps: true }
);

const blogModel = new mongoose.model("Blog", blogSchema, "Blog");

module.exports = blogModel;