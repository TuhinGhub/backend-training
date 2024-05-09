const Joi = require("joi");
import { Request, Response, NextFunction } from "express"
const userSchema = require("../config/validationJoi");

const queryVallidation=(req:Request,res:Response,next:NextFunction)=>{
    const result= parseInt(req.query.id as string );
    const {error}= Joi.number().validate(result);

    if(error){
       next(error);
    }
    next();
};
module.exports = queryVallidation;