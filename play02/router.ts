import express from "express"
const router = express.Router();

//make sure the middleware is before the routes otherwise won't work
const myLogger = (req: any, res: any, next: any) => {
  console.log("LOGGED")
  next()
}
const requestTime = (req: any, res: any, next: any) => {
  req.requestTime = new Date(Date.now()).toUTCString();
  next();
}
router.use([myLogger, requestTime])
router.get("/", (req: any, res: any) => {
  res.send(`Hello folks. It's greats time yoh! ${req.requestTime}`)
})


export default router;

// Understoond using middle-wares excepth the part concerning configuring. need more examples on the configuring middlewares. 
// To be reffered when dealing with COOKIE-SESSION & COMPRESSION