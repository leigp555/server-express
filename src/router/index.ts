const express=require('express')
//总路由
const router=express.Router()
//用户相关
router.use(require("./user"))
//用户资料相关
router.use('/profile',require("./profile"))
//文章相关
router.use('/article',require("./acticle"))

module .exports=router