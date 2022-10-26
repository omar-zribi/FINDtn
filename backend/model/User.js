const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userSex: {
        type: String,
        sex: ["male", "female"],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    etabOrigin: {
        type: String,
        required: true,
    },
    gouvernerat: {
        type: String,
        required: true,
    },
    posteAcctuel: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        roles: ["user", "admin"],
        default: "user"
    }
});

module.exports = mongoose.model("user", userSchema)