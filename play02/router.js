"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//make sure the middleware is before the routes otherwise won't work
const myLogger = (req, res, next) => {
    console.log("LOGGED");
    next();
};
const requestTime = (req, res, next) => {
    req.requestTime = new Date(Date.now()).toUTCString();
    next();
};
router.use([myLogger, requestTime]);
router.get("/", (req, res) => {
    res.send(`Hello folks. It's greats time yoh! ${req.requestTime}`);
});
exports.default = router;
// Understoond using middle-wares excepth the part concerning configuring. need more examples on the configuring middlewares. 
// To be reffered when dealing with COOKIE-SESSION & COMPRESSION
