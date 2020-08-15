export class Character {
  private _attackPoint: number 
  private _diffencePoint: number 
  private _gender: Gender 

  constructor(gender: Gender) {
    this._attackPoint = 0
    this._diffencePoint = 0
    this._gender = gender
    this.calcAttackPoint()
    this.calcDiffencePoint()
  }

  get gender(): Gender {
    return this._gender
  }

  set gender(newGender: Gender) {
    this._gender = newGender
  }

  get attackPoint(): number {
    return this._attackPoint
  }

  set attackPoint(newValue: number) {
    return this._attackPoint = newValue
  }

  get diffencePoint(): number {
    return this._diffencePoint
  }

  set diffencePoint(newValue: number) {
    return this._diffencePoint = newValue
  }

  private calcAttackPoint() {
    this.attackPoint = this.gender.incrementalAttackPoint()
  }

  private calcDiffencePoint() {
    this.diffencePoint = this.gender.incrementalDiffencePoint()
  }
}

