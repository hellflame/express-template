import Express from "express"
import ExpressWinston from "express-winston"
import Winston from "winston"
const app = Express()
const router = Express.Router()

router.get("/", (req, res) => {
    const result = {
        name: "hellflame"
    }
    res.json(result)
})

app.use(ExpressWinston.logger({
  transports: [
    new Winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}))

app.use(router)

app.use(ExpressWinston.errorLogger({
  transports: [
    new Winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}))

app.listen(3000, () => {
    console.log("started")
})
