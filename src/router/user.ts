import {Request, Response} from "express";
const express=require('express')
const router=express.Router()
const userControl=require('../controller/user')
//登录
router.get('/users/login',userControl.login)
//注册
router.post('/users/register',userControl.register)
//更新
router.put('/users/update',userControl.update)

module .exports=router