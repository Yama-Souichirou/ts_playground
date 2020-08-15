import Element from "./element.ts"

export default class WindElement extends Element {
  constructor() {
    super("wind")
  }

  incrementalAttackPoint(): number {
    return 5
  }

  incrementalDiffencePoint(): number {
    return 10
  }
}
