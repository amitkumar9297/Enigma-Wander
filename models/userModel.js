const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
    dp: {
        type: String
    },
    firstName: {
        type: String,
        trim: true,
        required: [true, "Please Enter your first name"]
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Please Enter your first name"]
    },
    fullName: {
        type: String,
        trim: true,
        required: [true, "Please Enter Your full name"]
    },
    eMail: {
        type: String,
        required: [true, "please enter your e-mail"],
        unique: [true, "email-id already exist, please check it"],
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid user")
            }
        }
    },
    additionalEmail: {
        type: String,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid E-Mail please check it")
            }
        }
    },
    phoneNo: {
        type: Number,
        required: [true, "ph.no is requires please enter it"],
        unique: false,
        minlength: 10,
        maxlength: 10
    },
    additionalPhoneNo: {
        type: Number,
        unique: false,
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: [true, "please enter the password"]
    },
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    totalPost: {
        type: Number,
    },
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: "user"
    }],
    bio: {
        type: String,
        maxlength: 500
    },
    savedBlog: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    likedBlog: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    commentedBlog: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    socialLink: [{
        type: String
    }]

},
    { timestamps: true }
);

const userModel = new mongoose.model("User", userSchema, "User")

module.exports = userModel;