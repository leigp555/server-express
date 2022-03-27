import {NextFunction, Request, Response} from "express";
import {userType} from "../type.d.ts";
const {User} =require('../model/index')
const jwt=require('../util/jwt')
const {jwtSecret}=require('../config/default.config')
//用户处理
//登录
exports.login=async(req:Request, res:Response,next:NextFunction) => {
    try{
        //生成token
        //@ts-ignore
        const user=req.user.toJSON()
        delete user.password
        const token=await jwt.sign({
            userId:user._id
        },jwtSecret,{ expiresIn: "1d"})
        res.json({
            msg:"登陆成功",
            ...user,
            token
        })
    }catch (err) {
        next(err)
    }
}

//注册
exports.register=async(req:Request, res:Response,next:NextFunction) => {
    const reqDate=req.body.user as userType
    try{
        let user= new User(reqDate)
        await user.save()
        user=user.toJSON(user)     //删除mongo返回的数据必须要用它提供的方法toJSON
        delete user.password
        res.status(201).json({
            user
        })
    }catch (err) {
        next(err)
    }
}
//获取当前用户信息
exports.currentUser=async(req:Request,res:Response,next:NextFunction) => {
    try{
        res.status(200).json({
            // @ts-ignore
            user:req.user
        })
    }catch (err) {
        next(err)
    }
}