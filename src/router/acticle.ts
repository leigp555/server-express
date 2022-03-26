import {NextFunction, Request, Response} from "express";
const express=require('express')
const router=express.Router()
//文章
//获取文章
router.get('/:articleId',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
})

//创建文章
router.post('/:articleId',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
})
//修改文章
router.put('/:articleId',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
})
//删除文章
router.delete('/:articleId',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
})