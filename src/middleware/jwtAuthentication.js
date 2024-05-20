const jwt=require('jsonwebtoken');

const jwtAuthentication=(req,res,next)=>{
    const token=req.headers["authtoken"];
    if(!token){
        return res.status(401).send('Access Denied');
    }
    try{
        const verified=jwt.verify(token,"tuhin");
        req.user=verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
    next();
}

module.exports={jwtAuthentication};