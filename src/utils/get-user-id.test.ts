import { getUserId } from './get-user-id';

const mockGetCookie = jest.fn();

jest.mock('next/headers', () => ({
  cookies: () => ({
    get: mockGetCookie,
  }),
}));

describe('getUserId', () => {
  it('returns the user ID stored in cookies', () => {
    mockGetCookie.mockReturnValue({ name: 'userId', value: 'abcd1234' });

    expect(getUserId()).toBe('abcd1234');
  });

  it('throws an error when the user ID is not found', () => {
    expect(() => getUserId()).toThrow('User ID not found');
  });
});
