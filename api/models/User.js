const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: [true, "username already exists"]
    },
    email:{
        type: String,
        required: true,
        unique: [true, "email id already exists"]
    },
    password:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        default: ""
    }
},

{timestamps: true}

)

module.exports = mongoose.model("User", userSchema);