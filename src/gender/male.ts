import { Gender } from "./gender.ts"

export class Male extends Gender {
  constructor() {
    super("MALE")
  }

  incrementalAttackPoint(): number {
    return 5
  }

  incrementalDiffencePoint(): number {
    return 0
  }
}
