export class Age {
  constructor(inputAge) {
    this.inputAge = inputAge;
    this.planetAge = [];
  }

  isNumber() {
      if (isNaN(this.inputAge)) {
        return true;
      }
    }

  planet() {
    let planetYear = [.24, .62, 1.88, 11.86];
    for(let time of planetYear){
      this.planetAge.push(Math.round(this.inputAge / time));
    }
  }
}

export class Demographic extends Age {
  constructor(inputAge, sex, race) {
    super(inputAge);
    this.sex = sex;
    this.race = race;
  }
}

// let Demographic = class extends Age {
// constructor ( inputAge, sex, ){

// }
// }