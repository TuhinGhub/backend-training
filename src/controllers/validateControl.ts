import {Request,Response,NextFunction} from "express";
const validateControl = (req:Request,res:Response) => {
    res.send(req.query.name);
  };
  
  export default validateControl;