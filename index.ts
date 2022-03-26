import {Request, Response} from "express";

const express=require('express')
const app=express()
const PORT=process.env.PORT||3000
const mongoose = require('mongoose');
//异步连接数据库
(async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/nodeDb')
})().then(()=>{
    console.log("数据库连接成功")}
).catch(err =>
    console.log("数据库连接失败"+err)
)


app.get('/',(req:Request, res:Response) => {
    res.send("200")
})
//监听端口
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

















