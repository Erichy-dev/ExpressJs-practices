import express from "express"
const router = express.Router()

router.use((req, res, next) =>{
  console.log("Time: ", Date.now);
  next()
})
router.get("/", (req, res) => {
  res.send("Birdy's home page")
})
router.get("/about", (req, res) => {
  res.send("Birdy got nothing to say")
})

export default router;