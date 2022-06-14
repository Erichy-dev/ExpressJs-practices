"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./router"));
const cors = require("cors");
const morgan = require("morgan");
const app = (0, express_1.default)();
const port = 3032;
app.use(cors());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(morgan("combined"));
app.use("/", router_1.default);
app.listen(port, () => console.log("express listening on port ", port));
