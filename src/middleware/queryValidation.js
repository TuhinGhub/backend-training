"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const userSchema = require("../config/validationJoi");
const queryVallidation = (req, res, next) => {
    const result = parseInt(req.query.id);
    const { error } = Joi.number().validate(result);
    if (error) {
        next(error);
    }
    next();
};
module.exports = queryVallidation;
