import {NextFunction, Request, Response} from "express";
const {Article}=require('../model/index')
//文章处理
//获取文章
exports.getArticle=async (req:Request, res:Response,next:NextFunction) => {
    try{
        const article=await Article.findById(req.params.articleId).populate("author")
        if(!article){
            res.status(404).json({msg:'没有对应的内容'})
        }
        res.status(200).json({
            article
        })
    }catch (err) {
        next(err)
    }
}

//创建文章
exports.createArticle=async(req:Request, res:Response,next:NextFunction) => {
    try{
        const article=new Article(req.body.article)
        // @ts-ignore
        article.author=req.user._id
        article.populate("author")
        // article.populate(['author'])
        // article.populated('author')
        await article.save()
        res.status(200).json({
            article
        })
    }catch (err) {
        next(err)
    }
}
//修改文章
exports.modifyArticle=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("修改文章")
    }catch (err) {
        next(err)
    }
}
//删除文章
exports.deleteArticle=async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send("删除文章")
    }catch (err) {
        next(err)
    }
}