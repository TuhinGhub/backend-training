"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateControl = (req, res) => {
    res.send(req.query.name);
};
exports.default = validateControl;
