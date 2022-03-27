const cryptoMd5=require("crypto")
//获取crypto支持的散列算法
// console.log(cryptoMd5.getHashes())

module .exports=(str:string)=>{
 return cryptoMd5.createHash("md5")
     .update(str)
     .digest('hex')
}