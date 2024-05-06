import jsonwebtoken from "jsonwebtoken";

export const auth = (data, key) => {
    console.log(data);
    const token = jsonwebtoken.sign(data, key); 
    return token;
}

export const verify = (token, key, next) => { 
    const decode = jsonwebtoken.verify(token, key); 
    console.log(decode);
    next();
}
