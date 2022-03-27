import {NextFunction, Request, Response} from "express";
import {userType} from "../type.d.ts";
import {body} from "express-validator";
const {User} =require('../model/index')

//用户处理
//登录
exports.login=async(req:Request, res:Response,next:NextFunction) => {
    console.log(req.body)
    try{
        res.json({
            msg:"登陆成功",
            email:req.body.user.email,
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
//更新用户
exports.update=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("更新成功")
    }catch (err) {
        next(err)
    }
}