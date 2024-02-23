import { RequestMethod } from '@/types/request-method';

type Options = {
  body?: RequestInit['body'];
  cacheTags?: string[];
  isJson?: boolean;
  method?: RequestMethod;
};

export const makeRequest = async <T>(
  resource: string,
  options: Options = {},
): Promise<T> => {
  const { body, cacheTags, isJson = false, method = 'GET' } = options;

  const headers: HeadersInit = {
    'x-api-key': process.env.API_KEY,
    ...(isJson ? { 'Content-Type': 'application/json' } : {}),
  };

  const response = await fetch(`${process.env.API_BASE_URL}/${resource}`, {
    method,
    headers,
    body,
    next: { tags: cacheTags },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
};
