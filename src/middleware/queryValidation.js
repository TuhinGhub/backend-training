const Joi = require("joi");
const userSchema = require("../config/validationJoi");

const queryVallidation=(req,res,next)=>{
    const id=parseInt(req.query.id);
    const {error}= Joi.number().validate(id);

    if(error){
       next(error);
    }
    req.id=id; 
    next();
};
module.exports = queryVallidation;