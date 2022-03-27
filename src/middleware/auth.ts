import {NextFunction, Request, Response} from "express";

const {verify}=require("../util/jwt")
const {jwtSecret}=require('../config/default.config')
const {User}=require('../model/index')
module .exports=async (req:Request,res:Response,next:NextFunction)=>{
    //获取请求头上的token
    //验证token
    //无效返回401状态码
    //有效把用户信息挂在到req上并next()
    let token=req.headers.authorization
    token=token?token.split('Bearer ')[1]:undefined
    if(!token){
        res.status(401).end()
    }

    try{
        const decodeToken=await verify(token,jwtSecret)
        //@ts-ignore
        req.user=await User.findById(decodeToken.userId)
        next()
    }catch (err){
        res.status(401).end()
    }


}