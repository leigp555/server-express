const express=require('express')
const router=express.Router()
const userControl=require('../controller/user')
const auto=require('../middleware/auth')
import { body, validationResult } from 'express-validator'
const userValidate=require("../validate/user")
//登录
router.get('/users/login',userValidate.login,userControl.login)
//注册
router.post('/users/register',userValidate.register,userControl.register)
//获取当前用户信息
router.get('/users/currentUser',auto,userControl.currentUser)

module .exports=router