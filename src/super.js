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
    this.calculateYearsRemaining();
    }
  }
  calculateYearsExtended() {
    this.yearsExtended = 0;
    if (this.inputAge > this.lifeExpectancy){
      this.yearsExtended = this.inputAge - this.lifeExpectancy;
    }
  }
  calculateYearsExtended() {
    this.yearsExtended = 0;
    if (this.inputAge > this.lifeExpectancy){
      this.yearsExtended = this.inputAge - this.lifeExpectancy;
    }
  }
}