import Express from "express"

import {es_winston_logger, es_winston_error_logger, common_logger} from "@/utils/log"
import {compatible_version} from "@/utils/meta"
import {parser} from "@/utils/arg_parse"

const app = Express()
const router = Express.Router()
const parse = parser().parseArgs()

router.get("/", (req, res) => {
    const result = {
        name: "hellflame"
    }
    res.json(result)
})

app.use(es_winston_logger)

app.use(`/v${compatible_version}`, router)

app.use(es_winston_error_logger)

app.listen(parse.port, parse.host, () => {
  common_logger.info("started")
})
