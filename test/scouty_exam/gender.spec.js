import { Male, Female } from "@/scouty_exam/gender/index"

describe("性別オブジェクトを作成", () => {
  describe("男性を作成", () => {
    const male = new Male

    test("get name", () => {
      expect(male.name).toEqual("MALE")
    })

    test("incremental attack point", () => {
      expect(male.incrementalAttackPoint()).toEqual(5)
    })

    test("incremental diffence point", () => {
      expect(male.incrementalDiffencePoint()).toEqual(0)
    })
  })

  describe("女性を作成", () => {
    const female = new Female

    test("get name", () => {
      expect(female.name).toEqual("FEMALE")
    })

    test("incremental attack point", () => {
      expect(female.incrementalAttackPoint()).toEqual(0)
    })

    test("incremental diffence point", () => {
      expect(female.incrementalDiffencePoint()).toEqual(5)
    })
  })
})
