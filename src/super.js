export class Age {
  constructor(inputAge) {
    this.inputAge = inputAge;
    this.planetAge = [];
  }

  planet() {
    this.planetAge.push(this.inputAge / .24);
    this.planetAge.push(this.inputAge / .62);
    this.planetAge.push(this.inputAge / 1.88);
    this.planetAge.push(this.inputAge / 11.86);
    
  }
}