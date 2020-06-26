export class Age {
  constructor(inputAge) {
    this.inputAge = inputAge;
  }

  isNumber() {
      if (isNaN(this.inputAge)) {
        return true;
      }
    }

  planet() {
    this.planetAge = [];
    let planetYear = [.24, .62, 1.88, 11.86];
    for(let time of planetYear){
      this.planetAge.push(Math.round(this.inputAge / time));
    }
  }
}