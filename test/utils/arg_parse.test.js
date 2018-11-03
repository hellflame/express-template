import {parser} from "@/utils/arg_parse"

it("shuold parse", () => {
  const p = parser().parseArgs(["--host", "127.0.0.1", "--port", "1024"])
  expect(p.host).toBe("127.0.0.1")
  expect(p.port).toBe(1024)
})
