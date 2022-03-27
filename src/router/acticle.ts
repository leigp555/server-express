import {NextFunction, Request, Response} from "express";
const express=require('express')
const router=express.Router()
const controlArticle=require('../controller/article')
const auth =require('../middleware/auth')
const articleValidate=require("../validate/article")
//文章
//获取指定文章
router.get('/currentArticle/:articleId',auth,articleValidate.getArticle,controlArticle.getArticle)

//创建文章
router.post('/create',auth,articleValidate.createArticle,controlArticle.createArticle)
//修改文章
router.put('/:articleId',auth,controlArticle.modifyArticle)
//删除文章
router.delete('/:articleId',auth,controlArticle.deleteArticle)

//获取文章列表(all)
router.get('/articleList/:ref',auth,controlArticle.articleList)

module .exports=router