import {ArgumentParser} from "argparse"

export const parser = () =>{
  const _parser = ArgumentParser({
    addHelp: true
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
