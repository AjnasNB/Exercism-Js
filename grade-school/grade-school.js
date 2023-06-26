//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._rosters = {};
  }

  roster() {
    return  JSON.parse(JSON.stringify(this._rosters)) ;}

  add(name,grade) {
    if (this._rosters[grade]) {
      this._rosters[grade].push(name);
    } else {
      this._rosters[grade] = [name];
    }
    this._rosters[grade].sort();
  }

  grade(grade) {
  if (this._rosters[grade]) {
    const names = this._rosters[grade];
    if (names.length > 1) {
      return [...names];
    }
  }
  return [];
}

}
