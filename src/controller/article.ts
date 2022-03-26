import {NextFunction, Request, Response} from "express";

//文章处理
//获取文章
exports.getArticle=async (req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
}

//创建文章
exports.createArticle=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
}
//修改文章
exports.modifyArticle=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
}
//删除文章
exports.deleteArticle=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("获取文章")
    }catch (err) {
        next(err)
    }
}