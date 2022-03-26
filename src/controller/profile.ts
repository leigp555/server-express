import {NextFunction, Request, Response} from "express";

//获取指定用户资料
exports.getUserProfile=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取指定用户资料")
    }catch (err) {
        next(err)
    }
}
//修改用户资料
exports.modifyUserprofile('/:username/flower',async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("关注用户")
    }catch (err) {
        next(err)
    }
})
//删除用户资料
exports.deleteUserprofile=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("取消关注用户")
    }catch (err) {
        next(err)
    }
}