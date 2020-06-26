import { Age } from './../src/super.js';

export class Demographic extends Age {
  constructor(inputAge, sex, ethnicity) {
    super(inputAge);
    this.sex = sex;
    this.ethnicity = ethnicity;
  }

  calculateLifeExpectancy () {
    this.lifeExpectancy = 80;
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
    if (this.inputAge > this.lifeExpectancy){
      this.calculateYearsExtended();
    } else {
      this.calculateYearsRemaining();
    }
  }
  calculateYearsRemaining() {
    this.yearsRemaining = this.lifeExpectancy - this.inputAge;
  }

  calculateYearsExtended() {
    this.yearsExtended = this.inputAge - this.lifeExpectancy;
  }
}