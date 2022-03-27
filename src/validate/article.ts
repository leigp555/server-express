import {body,param} from "express-validator"
const mongoose = require("mongoose");
const validate = require("../middleware/validate")

exports.createArticle=validate([
    body('article.title').notEmpty().withMessage("文章标题不能为空"),
    body('article.body').notEmpty().withMessage("文章内容不能为空")
])

exports.getArticle=validate([
    param('articleId').custom(async articleId=>{
        if(!mongoose.isValidObjectId(articleId)){
            return Promise.reject("无效的文章ID")
        }
    })
])