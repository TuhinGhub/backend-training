import jsonwebtoken from "jsonwebtoken";

export const auth = (data:any, key:any) => {
    console.log(data);
    const token = jsonwebtoken.sign(data, key); 
    return token;
}

export const verify = (token:any, key:any, next:any) => { 
    const decode = jsonwebtoken.verify(token, key); 
    console.log(decode);
    next();
}
