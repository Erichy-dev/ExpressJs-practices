import express from "express"
import bodyParser from "body-parser"
import birds from "./birds"

const cors = require ("cors")
const morgan = require ("morgan")

const app = express()
const port = 8080

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan("combined"))

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
app.use("/birds", birds)

app.listen(port, () => {
  console.log("express listening on port ", port)
})

// Most importantly learn to use express.Router()