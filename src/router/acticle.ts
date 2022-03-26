import {NextFunction, Request, Response} from "express";
const express=require('express')
const router=express.Router()
const controlArticle=require('../controller/article')
//文章
//获取文章
router.get('/:articleId',controlArticle.getArticle)

//创建文章
router.post('/:articleId',controlArticle.createArticle)
//修改文章
router.put('/:articleId',controlArticle.modifyArticle)
//删除文章
router.delete('/:articleId',controlArticle.deleteArticle)

module .exports=router