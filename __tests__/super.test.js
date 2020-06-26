import { Age } from './../src/super.js';

describe('Age', () => {

  beforeEach(() => {
  });

  test('should create a new age object', () => {
    const user1 = new Age(30);
    expect(user1).toMatchObject({inputAge: 30});
  });
  test('should output a planet adjusted age', () => {
    const user1 = new Age(30);
    user1.planet();
    expect(user1.planetAge).toContain(125);
    expect(user1.planetAge).toContain(48);
    expect(user1.planetAge).toContain(16);
    expect(user1.planetAge).toContain(3);
  });
});