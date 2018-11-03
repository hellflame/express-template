import Express from "express"
import BodyParser from "body-parser"

import {es_winston_logger, es_winston_error_logger, common_logger} from "@/utils/log"
import {compatible_version} from "@/utils/meta"
import {parser} from "@/utils/arg_parse"
import router from "./pages/route"

const app = Express()
app.use(BodyParser.json())

const parse = parser().parseArgs(),
  _port = parse.port,
  _host = parse.host,
  version_path = `/v${compatible_version}`

app.use(es_winston_logger)

app.use(`/v${compatible_version}`, router)

app.use(es_winston_error_logger)

app.listen(parse.port, parse.host, () => {
  common_logger.info(`started on http://${_host}:${_port}${version_path}`)
})

export default app
