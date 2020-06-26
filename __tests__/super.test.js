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
});