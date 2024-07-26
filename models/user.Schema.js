const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number
})

const userModel = mongoose.model("userDataTbl",userSchema);

module.exports = userModel;