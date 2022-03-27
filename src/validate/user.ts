import {body} from "express-validator"
const {User} = require("../model/index")
const cryptoMd5=require("../util/md5")
const validate = require("../middleware/validate")
//注册验证
exports.register = validate([
    //1.配置验证规则
    body('user.username')
        .notEmpty().withMessage("用户名不能为空")
        .custom(async username => {
            const user = await User.findOne({username})
            if (user) {
                return Promise.reject("用户名已存在")
            }
        }),
    body('user.email')
        .notEmpty().withMessage('邮箱不能为空')
        .isEmail().withMessage('邮箱格式不正确')
        .bail()
        .custom(async email => {
            const user = await User.findOne({email})
            if (user) {
                return Promise.reject("邮箱已存在")
            }
        }),
    body('user.password')
        .notEmpty().withMessage("密码不能为空")
        .isLength({min: 6, max: 16}).withMessage("密码长度必须在6-16位之间")
])
//登录验证
exports.login=[
    validate([
        //1.配置验证规则                                 //只有邮箱和密码都不为空的情况下才会执行后续的中间件
        body('user.email')
            .notEmpty().withMessage('邮箱不能为空')
            .isEmail().withMessage('邮箱格式不正确'),
        body('user.password')
            .notEmpty().withMessage("密码不能为空")
    ]),
    validate([
        //1.配置验证规则
        body('user.email').custom(async (email,{req})=>{
            const user=await User.findOne({email}).select(['email','username','bio','image','password'])  //之前设置了查询不带出密码，现在要用的话必须主动选择
            if(!user){
                return Promise.reject("用户不存在")
            }
            req.user=user
        })
    ]),
    validate([
        //1.配置验证规则
        body('user.password').custom(async (password,{req})=>{
            const md5Password=cryptoMd5('lgp'+password)
            if(md5Password!==req.user.password){
                return Promise.reject("密码不正确")
            }
        })
    ]),
]