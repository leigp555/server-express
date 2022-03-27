import {Request, Response} from "express";
const express=require('express')

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



app.use('/api',router)    //路由
app.use(errorHandle())    //同意处理失败
//监听端口
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

















