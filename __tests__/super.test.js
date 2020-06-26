import { Age } from './../src/super.js';

describe('Age class', () => {
let reusableAge;

  beforeEach(() => {
    reusableAge = new Age();
  });

  test('should create a new age object', () => {
    const user1 = new Age(30);
    expect(user1).toMatchObject({inputAge: 30});
  });
  test('should output a planet adjusted age', () => {
    const user1 = new Age(30);
    Age.planet();
    expect(Age.planetAge).toContain({30});
  });
});