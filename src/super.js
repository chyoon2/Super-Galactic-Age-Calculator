export class Age {
  constructor(inputAge) {
    this.inputAge = inputAge;
    this.planetAge = [];
  }

  planet() {
    let planetYear = [.24, .62, 1.88, 11.86];
    for(let time of planetYear){
    this.planetAge.push(Math.round(this.inputAge / time));
    }
  }
}