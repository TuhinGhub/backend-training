"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthCheckController {
    checkHealth(req, res) {
        res.status(200).json({ message: "I am fine thankyou" });
    }
}
exports.default = new HealthCheckController();
