import {NextFunction, Request, Response} from "express";
import {articleFilter} from "../type.d.ts";

const {Article,User} = require('../model/index')
//文章处理
//获取文章
exports.getArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const article = await Article.findById(req.params.articleId).populate("author")
        if (!article) {
            res.status(404).json({msg: '没有对应的内容'})
        }
        res.status(200).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

//创建文章
exports.createArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const article = new Article(req.body.article)
        // @ts-ignore
        article.author = req.user._id
        article.populate("author")
        // article.populate(['author'])
        // article.populated('author')
        await article.save()
        res.status(200).json({
            article
        })
    } catch (err) {
        next(err)
    }
}
//修改文章
exports.modifyArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("修改文章")
    } catch (err) {
        next(err)
    }
}
//删除文章
exports.deleteArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("删除文章")
    } catch (err) {
        next(err)
    }
}


exports.articleList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {limit = 5, offset = 0,tag,author} = req.query
        const filter:articleFilter = {};
        //根据标签查询
        if(tag){
            filter.tagList=tag as string[]                         //只要有一个tag就会被查询到包含关系
        }
        //根据作者查询
        if(author){
            const user=await User.findOne({username:author})
            filter.author=user._id?user._id:null
        }

        const articles = await Article.find(filter)              //查询条件
            .skip(parseInt((offset as string)))                                      //跳过多少条类型要转成number
            .limit(parseInt((limit as string)))                                     //取多少条类型要转成number
            .sort({"createAt":-1})
        const articlesCount = await Article.countDocuments()   //总条数
        res.status(200).json({
            articles,
            articlesCount
        })
    } catch (err) {
        next(err)
    }
}