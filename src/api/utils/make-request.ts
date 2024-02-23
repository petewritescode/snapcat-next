import { RequestMethod } from '@/types/request-method';

type Options = {
  method?: RequestMethod;
  body?: RequestInit['body'];
  isJson?: boolean;
};

export const makeRequest = async <T>(
  resource: string,
  options: Options = {},
): Promise<T> => {
  const { method = 'GET', body, isJson = false } = options;

  const headers: HeadersInit = {
    'x-api-key': process.env.API_KEY,
    ...(isJson ? { 'Content-Type': 'application/json' } : {}),
  };

  const response = await fetch(`${process.env.API_BASE_URL}/${resource}`, {
    method,
    headers,
    body,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
};
