"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HealthCheckController_1 = __importDefault(require("./controller/HealthCheckController"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/healthcheck", (req, res) => {
    HealthCheckController_1.default.checkHealth(req, res);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
