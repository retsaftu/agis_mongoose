const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    }
}, {collection: 'users'});
module.exports = mongoose.model("User", userScheme);
