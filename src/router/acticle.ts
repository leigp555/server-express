import {NextFunction, Request, Response} from "express";
const express=require('express')
const router=express.Router()
const controlArticle=require('../controller/article')
const auth =require('../middleware/auth')
const articleValidate=require("../validate/article")
//文章
//获取文章
router.get('/:articleId',auth,articleValidate.createArticle,controlArticle.getArticle)

//创建文章
router.post('/create',auth,controlArticle.createArticle)
//修改文章
router.put('/:articleId',auth,controlArticle.modifyArticle)
//删除文章
router.delete('/:articleId',auth,controlArticle.deleteArticle)

module .exports=router