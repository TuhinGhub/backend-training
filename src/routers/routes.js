const express=require("express");
const MensRanking = require('../models/mens');

const router= new express.Router();
router.post('/mens',async(req,res)=>{
    try{
       
    const addingMensRecords=new MensRanking(req.body);
    console.log(req.body);
    const insertmensdata=await addingMensRecords.save();
    res.status(201).send(insertmensdata);
    }catch(e)
    {
        res.status(400).send(e);
    }
})

router.get('/mens',async(req,res)=>{
    try{
         const getmensdata=await MensRanking.find({}).sort({"ranking":1});
        res.send(getmensdata);
        }catch(e)
        {
            res.status(400).send(e);
        }
})

router.get('/mens/:id',async(req,res)=>{
    try{

        const _id=req.params.id;
         const getmendata=await MensRanking.findById(_id);
        res.send(getmendata);
        }catch(e)
        {
            res.status(400).send(e);
        }
})

router.patch('/mens/:id',async(req,res)=>{
    try{

        const _id=req.params.id;
         const updatemendata=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updatemendata);
        }catch(e)
        {
            res.status(500).send(e);
        }
})
router.delete('/mens/:id',async(req,res)=>{
    try{

        const _id=req.params.id;
         const deletemendata=await MensRanking.findByIdAndDelete(_id);
        res.send(deletemendata);
        }catch(e)
        {
            res.status(500).send(e);
        }
})

module.exports=router;