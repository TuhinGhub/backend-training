import express from 'express';

const router=express.Router();
router.post('/',(req,res,next)=>{
    console.log("body",req.body);
    res.status(201).json({message:'hello using post route'});
});

router.get('/get',(req,res,next)=>{
    res.status(201).json({message:'hello using get route'})
});