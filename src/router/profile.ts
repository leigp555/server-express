import {NextFunction, Request, Response} from "express";
const express=require('express')
const router=express.Router()
const controlProfile=require("../controller/profile")
// 获取指定用户资料
router.get('/:username/flower',controlProfile.getUserProfile)
//修改用户资料
router.post('/:username/flower',controlProfile.modifyUserprofile)
//删除用户资料
router.delete('/:username/flower',controlProfile.deleteUserprofile)

module .exports=router