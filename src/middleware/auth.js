"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (data, key) => {
    console.log(data);
    const token = jsonwebtoken_1.default.sign(data, key);
    return token;
};
exports.auth = auth;
const verify = (token, key, next) => {
    const decode = jsonwebtoken_1.default.verify(token, key);
    console.log(decode);
    next();
};
exports.verify = verify;
