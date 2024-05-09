const userSchema = require("../config/validationJoi");
import{Request,Response,NextFunction} from "express";

const validUser = (req:Request,res:Response,next:NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(200).json({ message: error.details[0].message });
  }
  next();
};
module.exports = validUser;
