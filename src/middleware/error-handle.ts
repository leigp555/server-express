import {NextFunction, Request, Response} from "express";
const util=require('util')

module .exports=()=>{
    return (err:Error,req:Request,res:Response,next:NextFunction)=>{

        res.status(500).json({
            error:util.format(err)                       //需要用到util转化err才能返回给客户端
        })
    }
}