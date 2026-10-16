
const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(
        "mongodb+srv://Shivraj_1711:Shivraj%402008@cluster0.106obkc.mongodb.net/project-1"
    );

    console.log("Connect to DB");
}

module.exports = connectDB;
