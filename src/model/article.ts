import * as mongoose from "mongoose";
const Schema=mongoose.Schema

const articleSchema = new mongoose.Schema({                                 //建表
    "title": {
        type: String,
        required: true
    },
    "body": {
        type: String,
        required: true
    },
    "author": {
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    "favorite": {
        type: Boolean,
        default: false
    },
    "tagList": {
        type: Array,
        default: []
    },
    "createAt": {
        type: Date,
        default: Date.now
    },
    "updatedAt": {
        type: Date,
        default: Date.now
    },
})

module.exports = articleSchema