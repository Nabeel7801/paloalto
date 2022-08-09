const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    Email: { type: String, required: false },
    Password: { type: String, required: false },
    FirstName: { type: String, required: false },
    LastName: { type: String, required: false },
    Token: { type: String, required: false }
});

const Users = mongoose.model("users", usersSchema)

module.exports = Users