import Express from "express"

import {say_ok} from "./service/ok"

const _router = Express.Router()

_router.get("/", say_ok)

export default _router

