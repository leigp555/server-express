//连接数据库
const mongoose = require("mongoose");
const dbUri = require("../config/dburi");
async function main() {
    await mongoose.connect(dbUri.uri);
}
main().then(()=>{
    console.log("连接数据库成功")
}).catch(err => console.log('数据库连接失败',err));


//组织导出模型
module.exports={
    User:mongoose.model('User',require('./user')),
    Article:mongoose.model('Article',require('./article'))
}