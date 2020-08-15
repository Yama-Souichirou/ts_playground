import { WindElement } from "../src/element/index"

describe("Element", () => {
  describe("create wind element", () => {
    const wind = new Wind

    it("get name", () => {
      expect(wind.name).toBe("wind")
    })
  })
})
