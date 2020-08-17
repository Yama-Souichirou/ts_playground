import { Character } from '@/scouty_exam/character.ts'
import { Male, Female } from '@/scouty_exam/gender/index'

describe("Charactor", () => {
  describe("create a male charactor", () => {
    const male = new Male
    const charactor = new Character(male)

    it("get gender", () => {
      expect(charactor.gender).toBeInstanceOf(Male)
    })

    it("get point", () => {
      expect(charactor.attackPoint).toBe(5)
      expect(charactor.diffencePoint).toBe(0)
    })

    describe("change a gender", () => {
      it("get a gender", () => {
        const female = new Female
        charactor.gender = female
        expect(charactor.gender).toBeInstanceOf(Female)
      })
    })
  })

  describe("create a female charactor", () => {
    const charactor = new Character(new Female)

    it("get gender name", () => {
      expect(charactor.gender).toBeInstanceOf(Female)
    })

    it("get point", () => {
      expect(charactor.attackPoint).toBe(0)
      expect(charactor.diffencePoint).toBe(5)
    })

    describe("change a gender", () => {
      it("get a gender", () => {
        const male = new Male
        charactor.gender = male
        expect(charactor.gender).toBeInstanceOf(Male)
      })
    })
  })
})
