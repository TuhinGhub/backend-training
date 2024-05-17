console.log('here6');
require('../config/Database');
const userRegistration=require('../repository/user/userSchema');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const signup= async(req,res)=>{
    
    const {name,email,password}=req.body;
    const salt= await bycrypt.genSalt();
    const hashedPassword=await bcrypt.hash(password,salt);

    const addUser=await userRegistation.create({
        name:name,
        email:email,
        password:hashedPassword
    });
    console.log(addUser);
    res.send(addUser);


}



module.exports={signup};