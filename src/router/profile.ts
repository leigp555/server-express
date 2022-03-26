import {NextFunction, Request, Response} from "express";
const express=require('express')
const router=express.Router()
//获取指定用户资料
router.get('/:username',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取指定用户资料")
    }catch (err) {
        next(err)
    }
})
//关注用户
router.post('/:username/flower',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("关注用户")
    }catch (err) {
        next(err)
    }
})
//取消关注用户
router.delete('/:username/flower',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("取消关注用户")
    }catch (err) {
        next(err)
    }
})
module .exports=router