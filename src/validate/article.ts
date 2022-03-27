import {body} from "express-validator"
const {User} = require("../model/index")
const validate = require("../middleware/validate")

exports.createArticle=validate([
    body('article.title').notEmpty().withMessage("文章标题不能为空"),
    body('article.body').notEmpty().withMessage("文章内容不能为空")
])