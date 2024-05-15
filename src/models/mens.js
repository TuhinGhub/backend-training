const mongoose=require('mongoose');

const menSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        rquired:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        rquired:true,
        trim:true
    },
    score:{
        type:Number,
        rquired:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }
})

const MenRankings=new mongoose.model("MenRankings",menSchema);
module.exports=MenRankings;


