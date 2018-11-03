import {greet} from "@/model/hello"
import {author} from "@/utils/meta"

export function say_ok(req, res, next) {
  const {name = author} = req.body
  return res.send(greet(name))
}


