import {NextFunction, Request, Response} from "express";
const express=require('express')
const router=express.Router()
//登录
router.get('/users/login',async(req:Request, res:Response,next:NextFunction) => {
   try{
       res.send("登录成功")
   }catch (err) {
       next(err)
   }
})
//注册
router.post('/users/register',(req:Request, res:Response,next:NextFunction) => {
   try{
       res.send("注册成功")
   }catch (err) {
       next(err)
   }
})
//更新
router.put('/users/update',(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("更新成功")
    }catch (err) {
        next(err)
    }
})

module .exports=router