import {Request, Response} from "express";
const express=require('express')
const mongoose = require('mongoose');
const morgan=require('morgan')
const cors=require('cors')
const router=require('./src/router/index')
const errorHandle=require("./src/middleware/error-handle")
const PORT=process.env.PORT||8000
const app=express()
app.use(morgan('dev'))    //日志
app.use(express.urlencoded())  //解析请求体
app.use(express.json())      //解析请求体
app.use(cors())             //跨域资源请求

async function main() {
    await mongoose.connect('mongodb://localhost:27017/nodeDb');
}
main().then(()=>{console.log("连接数据库成功")}).catch(err => console.log(err));

app.use('/api',router)
app.use(errorHandle())
//监听端口
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

















