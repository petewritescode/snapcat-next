import { makeRequest } from './make-request';

const successResponse = {
  ok: true,
  json: async () => 'Success body',
} as Response;

const errorResponse = {
  ok: false,
  statusText: 'Error body',
} as Response;

describe('makeRequest', () => {
  it('calls the requested resource', async () => {
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(successResponse);

    await makeRequest('lorem-ipsum');

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/lorem-ipsum`,
      { headers: { 'x-api-key': process.env.API_KEY } },
    );
  });

  it('returns the result on success', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue(successResponse);

    const result = await makeRequest('lorem-ipsum');

    expect(result).toBe('Success body');
  });

  it('throws an error on failure', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue(errorResponse);

    await expect(async () => makeRequest('lorem-ipsum')).rejects.toThrow(
      'Error body',
    );
  });
});
