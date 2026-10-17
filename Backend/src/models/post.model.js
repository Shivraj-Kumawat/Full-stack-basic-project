const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image:String,
    captain: String,
})
const postModel = mongoose.model("users",postSchema)
module.exports = postModel