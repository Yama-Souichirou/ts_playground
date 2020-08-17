import { WindElement } from "@/scouty_exam/element/index"

describe("Element", () => {
  describe("create wind element", () => {
    const wind = new WindElement

    it("get name", () => {
      expect(wind.name).toBe("wind")
    })
  })
})
