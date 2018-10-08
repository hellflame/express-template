import {ArgumentParser} from "argparse"
import {version, description} from "@/utils/meta"

export const parser = () =>{
  const _parser = ArgumentParser({
    version,
    description
  })

  _parser.addArgument([
    "--host"
  ], {
    help: "listen host",
    defaultValue: "127.0.0.1"
  })

  _parser.addArgument([
    "--port"
  ], {
    help: "listen port",
    type: Number,
    defaultValue: 5000
  })
  return _parser
}
