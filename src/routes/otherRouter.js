"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const { validateControl, promise } = require("../controllers");
const router = express_1.default.Router();
const console_1 = require("console");
router.get("/", (req, res, next) => {
    try {
        throw new Error("Not Found");
    }
    catch (err) {
        {
            if (err instanceof Error)
                console_1.error.status = 404;
        }
        next(err);
    }
});
router.get("/protected-route", (req, res, next) => {
    if (!req.user) {
        next((0, http_errors_1.default)(401, "Unauthorized"));
    }
    else {
        res.send(req.body.user);
    }
});
router.post("/api/resource", (req, res, next) => {
    if (!req.body.name) {
        next((0, http_errors_1.default)(400, "Bad Request: Name is required"));
    }
    else {
        res.send(req.body.name);
    }
});
router.get("/async", promise);
router.post("/validate", validateControl);
module.exports = router;
