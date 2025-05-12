    require("dotenv").config();
    const mongoose = require("mongoose");
    const { string } = require("zod");

    const MONGO_URL = process.env.MONGO_URL;

    mongoose.connect(MONGO_URL);

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String
});

const acoountSchema = mongoose.Schema({
    userId: String,
    balance: Number
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", acoountSchema);

module.exports = {
    User,
    Account
};