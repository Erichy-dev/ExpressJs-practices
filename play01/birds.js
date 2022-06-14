"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log("Time: ", Date.now);
    next();
});
router.get("/", (req, res) => {
    res.send("Birdy's home page");
});
router.get("/about", (req, res) => {
    res.send("Birdy got nothing to say");
});
exports.default = router;
