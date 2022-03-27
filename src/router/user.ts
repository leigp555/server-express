const express=require('express')
const router=express.Router()
const userControl=require('../controller/user')
import { body, validationResult } from 'express-validator'
const userValidate=require("../validate/user")
//登录
router.get('/users/login',userValidate.login,userControl.login)
//注册
router.post('/users/register',userValidate.register,userControl.register)
//更新
router.put('/users/update',userControl.update)

module .exports=router