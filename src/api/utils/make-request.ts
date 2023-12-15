export const makeRequest = async <T>(resource: string): Promise<T> => {
  const response = await fetch(`${process.env.API_BASE_URL}/${resource}`, {
    headers: { 'x-api-key': process.env.API_KEY },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
};
