import { Age } from './../src/super.js';

export class Demographic extends Age {
  constructor(inputAge, sex, ethnicity) {
    super(inputAge);
    this.sex = sex;
    this.ethnicity = ethnicity;
  }

  calculateLifeExpectancy () {
    this.planetYears = [1, .24, .62, 1.88, 11.86];
    this.lifeExpectancy = 80;
    this.planetLifeExpectancy =[];

    if (this.sex === "Male") {
      this.lifeExpectancy -= 10;
    }
    if (this.ethnicity === "Latinx")  {
      this.lifeExpectancy += 10;
    } else if (this.ethnicity === "Asian")  {
      this.lifeExpectancy += 10; 
    } else if (this.ethnicity === "Hawaiin & Pacific Islander")  {
      this.lifeExpectancy += 9;
    } else if (this.ethnicity === "White")  {
      this.lifeExpectancy += 9;
    } else {
      this.lifeExpectancy += 9;
    }

    for(let time of this.planetYears){
      this.planetLifeExpectancy.push(Math.round(this.lifeExpectancy / time));
    }

    if (this.inputAge > this.lifeExpectancy){
      this.calculateYearsExtended();
    } else {
      this.calculateYearsRemaining();
    }
  }
  calculateYearsRemaining() {
    this.planetYearsRemaining = [];
    this.yearsRemaining = this.lifeExpectancy - this.inputAge;

    for(let time of this.planetYears){
      this.planetYearsRemaining.push(Math.round(this.yearsRemaining / time));
    }
  }

  calculateYearsExtended() {
    this.planetYearsExtended = [];
    this.yearsExtended = this.inputAge - this.lifeExpectancy;

    for(let time of this.planetYears){
      this.planetYearsExtended.push(Math.round(this.yearsExtended / time));
    }
  }
}