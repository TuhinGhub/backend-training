const _ = require('lodash');

const add=(a,b)=>{
    let s=_.add(a,b);
    return  s;
}

const sub=(a,b)=>{
    let d=_.subtract(a,b);
    return d;
}

const mul=(a,b)=>{
    let m=_.multiply(a,b);
    return m;
}
const div=(a,b)=>{
    let q=_.divide(a,b);
    return q;
}

module.exports={add,sub,mul,div};