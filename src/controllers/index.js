"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncController_1 = __importDefault(require("./asyncController"));
const validateControl_1 = __importDefault(require("./validateControl"));
module.exports = { promise: asyncController_1.default, validateControl: validateControl_1.default };
