import { getUserId } from './get-user-id';

const mockGetCookie = jest.fn();

jest.mock('next/headers', () => ({
  cookies: async () => ({
    get: mockGetCookie,
  }),
}));

describe('getUserId', () => {
  it('returns the user ID stored in cookies', async () => {
    mockGetCookie.mockReturnValue({ name: 'userId', value: 'abcd1234' });

    expect(await getUserId()).toBe('abcd1234');
  });

  it('throws an error when the user ID is not found', async () => {
    await expect(getUserId()).rejects.toThrow('User ID not found');
  });
});
