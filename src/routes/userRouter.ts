const express=require("express");
const app=express();
const validUser = require("../middleware/validUser");
const queryVallidation=require("../middleware/queryValidation");
const locationValidation=require("../middleware/locationValidation");
import {Request,Response,NextFunction} from "express";

const PORT=3001;

const router=express.Router();
app.use(express.json());

router.post('/validate',validUser,(req:Request,res:Response)=>{

    res.json({message:"user validated"});

});
router.post('/queryvalidate',queryVallidation,(req:Request,res:Response)=>{
    res.json({message:"query validated"});
});
router.get("/profile", locationValidation, (req:Request, res:Response) => {
    res.json({ message: "user profile access" });
  });

app.use(router);
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})

module.exports = router;
