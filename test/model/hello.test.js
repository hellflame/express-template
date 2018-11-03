import {greet} from "@/model/hello"

it("greet the guest", () => {
  expect(greet("stranger")).toEqual("hello stranger")
})
