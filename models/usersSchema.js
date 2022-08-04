const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    Email: { type: String, required: false },
    Password: { type: String, required: false },
    Name: { type: String, required: false },
    Token: { type: String, required: false }
});

const Users = mongoose.model("users", usersSchema)

module.exports = Users