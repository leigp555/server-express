import {Request, Response} from "express";

const express=require('express')
const router=express.Router()

//用户相关
router.use(require("./user"))
//用户资料相关
router.use('/profile',require("./profile"))
//文章相关
router.use('/article',require("./acticle"))

module .exports=router