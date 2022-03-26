import {NextFunction, Request, Response} from "express";

//用户处理
//登录
exports.login=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("登录成功")
    }catch (err) {
        next(err)
    }
}

//注册
exports.register=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("注册成功")
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