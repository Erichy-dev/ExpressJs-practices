import express from "express"
import bodyParser from "body-parser"
import HomeRouter from "./router"
const cors = require ("cors")
const morgan = require ("morgan")


const app = express();
const port = 3032;

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan("combined"))

app.use("/", HomeRouter)

app.listen(port, () => console.log("express listening on port ", port))
