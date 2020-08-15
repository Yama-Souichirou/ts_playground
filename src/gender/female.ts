import { Gender } from "./gender.ts"

export class Female extends Gender {
  constructor() {
    super("FEMALE")
  }

  incrementalAttackPoint(): number {
    return 0
  }

  incrementalDiffencePoint(): number {
    return 5
  }
}
