import request from "supertest"

import app from "@/index"

it("route to current version", (done) => {
  request(app)
  .get("/v0.1")
  .then(resp => {
    expect(resp.statusCode).toBe(200)
    expect(resp.text).toBe("hello hellflame")
    done()
  })
})

