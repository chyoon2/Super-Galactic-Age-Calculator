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
    let lifeExpectancy = 80;
    if (this.sex === "Male") {
      lifeExpectancy -= 10;
    }
    if (this.ethnicity === "Latinx")  {
      lifeExpectancy += 10;
    } else if (this.ethnicity === "Asian")  {
      lifeExpectancy += 10; 
    } else if (this.ethnicity === "Hawaiin & Pacific Islander")  {
      lifeExpectancy += 9;
    } else if (this.ethnicity === "White")  {
      lifeExpectancy += 9;
    } else {
      lifeExpectancy += 9;
    }
      console.log(lifeExpectancy);
    return lifeExpectancy;
  }
}