import createError from "http-errors";
import {Request,Response,NextFunction} from "express";
const promise=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await new Promise((resolve,reject)=>{
            reject(new Error("Promise Rejected"));
        });
    }catch(error){
        if(error instanceof Error)
       next(createError(500,error.message));
    }
};

export default promise;
