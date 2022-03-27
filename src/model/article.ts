import * as mongoose from "mongoose";

const articleSchema = new mongoose.Schema({                                 //建表
    "username": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "bio": {
        type: String,
        default: null
    },
    "img": {
        type: String,
        default: null
    },
    "createAt": {
        type: Date,
        default: Date.now
    },
    "updatedAt": {
        type: Date,
        default: Date.now
    },
});

module.exports = articleSchema