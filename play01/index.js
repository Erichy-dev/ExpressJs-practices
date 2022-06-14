"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const birds_1 = __importDefault(require("./birds"));
const cors = require("cors");
const morgan = require("morgan");
const app = (0, express_1.default)();
const port = 8080;
app.use(cors());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(morgan("combined"));
// res METHODS
/*
res.download(): prompt a file to be downloaded
res.end(): end the response process
res.json(): send a JSON response
res.jsonp(): send a JSON response with JSONP support
res.redirect(): redirect a request
res.render(): render a view template
res.send(): send a response of various types
res.sendStatus(): send response status & send its string representation as the res body.
*/
app.use("/birds", birds_1.default);
app.listen(port, () => {
    console.log("express listening on port ", port);
});
// Most importantly learn to use express.Router()
