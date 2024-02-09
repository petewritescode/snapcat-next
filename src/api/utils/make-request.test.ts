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
      expect.any(Object),
    );
  });

  it('makes a GET request by default', async () => {
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(successResponse);

    await makeRequest('lorem-ipsum');

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/lorem-ipsum`,
      expect.objectContaining({
        method: 'GET',
      }),
    );
  });

  it('uses the specified request method', async () => {
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(successResponse);

    await makeRequest('lorem-ipsum', { method: 'POST' });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/lorem-ipsum`,
      expect.objectContaining({
        method: 'POST',
      }),
    );
  });

  it('includes the API key header', async () => {
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(successResponse);

    await makeRequest('lorem-ipsum');

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/lorem-ipsum`,
      expect.objectContaining({
        headers: {
          'x-api-key': process.env.API_KEY,
        },
      }),
    );
  });

  it('includes the JSON content type header only when there is body data', async () => {
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(successResponse);

    await makeRequest('lorem-ipsum');

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/lorem-ipsum`,
      expect.not.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
      }),
    );

    fetchSpy.mockClear();

    await makeRequest('lorem-ipsum', {
      body: JSON.stringify({ lorem: 'ipsum' }),
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/lorem-ipsum`,
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
      }),
    );
  });

  it('includes the request body', async () => {
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(successResponse);

    await makeRequest('lorem-ipsum', {
      body: JSON.stringify({ lorem: 'ipsum' }),
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/lorem-ipsum`,
      expect.objectContaining({
        body: '{"lorem":"ipsum"}',
      }),
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
