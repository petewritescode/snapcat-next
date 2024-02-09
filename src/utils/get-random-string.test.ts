import { getRandomString } from './get-random-string';

describe('getRandomString', () => {
  it('returns a string of the specified length', () => {
    expect(getRandomString(0).length).toBe(0);
    expect(getRandomString(1).length).toBe(1);
    expect(getRandomString(10).length).toBe(10);
    expect(getRandomString(100).length).toBe(100);
  });

  it('handles negative numbers by imposing a minimum length', () => {
    expect(getRandomString(-1).length).toBe(0);
  });
});
