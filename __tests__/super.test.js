import { Age } from './../src/super.js';
import { Demographic } from './../src/demographic.js';

describe('Age class', () => {

  test('should create a new age object', () => {
    const user1 = new Age(30);
    user1.planet();
    expect(user1).toMatchObject({inputAge: 30});
  });

  test('should push a planet adjusted age into a object.planetAge Array', () => {
    const user1 = new Age(30);
    user1.planet();
    expect(user1.planetAge).toContain(125);
    expect(user1.planetAge).toContain(48);
    expect(user1.planetAge).toContain(16);
    expect(user1.planetAge).toContain(3);
  });

  test('should check if inputAge is a number', () => {
    const user1 = new Age("not a number");
    expect(user1.isNumber()).toBe(true);
  });
});

describe('Demographic extended', () => {

  test('should create objects with demographic properties', () => { 
    let user2 = new Demographic(30, "Male", "Latinx");
    expect(user2).toMatchObject({inputAge: 30, sex: "Male", ethnicity: "Latinx"});
  });

  test('should return a lifeExpectancy', () => {
    let user2 = new Demographic(30, "Male", "Latinx");
    user2.calculateLifeExpectancy();
    expect(user2.lifeExpectancy).toEqual(80);
  });

  test('should return yearsRemaining which is lifeExpectancy minus inputAge', () => {
    let user2 = new Demographic(30, "Male", "Latinx");
    user2.calculateLifeExpectancy();
    expect(user2.yearsRemaining).toBe(50);
  });

  test('should return yearsExtended which is inputAge minus lifeExpectancy', () => {
    let user2 = new Demographic(90, "Male", "Latinx");
    user2.calculateLifeExpectancy();
    expect(user2.yearsExtended).toBe(10);
  });

  test('should return an array with life expectancy on each planet', () => {
    let user2 = new Demographic(90, "Male", "Latinx");
    user2.calculateLifeExpectancy();
    expect(user2.planetLifeExpectancy).toContain(0);
    expect(user2.planetLifeExpectancy).toContain(19);
    expect(user2.planetLifeExpectancy).toContain(50);
    expect(user2.planetLifeExpectancy).toContain(949);
  });
  // // test('should return an array with years extended on each planet', () => {
  //   let user2 = new Demographic(90, "Male", "Latinx");
  //   expect(user2.planetYearsRemaining).toContain(125);
  //   expect(user2.planetYearsRemaining).toContain(48);
  //   expect(user2.planetYearsRemaining).toContain(16);
  //   expect(user2.planetYearsRemaining).toContain(3);
  // // });
});