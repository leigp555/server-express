import * as mongoose from "mongoose";
const md5=require('../util/md5')
const userSchema = new mongoose.Schema({                                 //建表
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
        required: true,
        set:(value:string) => md5('lgp'+value),
        select:false
    },
    "bio": {
        type:String,
        default:null
    },
    "img": {
        type:String,
        default:null
    },
    "createAt": {
        type:Date,
        default:Date.now
    },
    "updatedAt": {
        type:Date,
        default:Date.now
    },
});

module .exports=userSchema