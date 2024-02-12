import { makeRequest } from './utils/make-request';

export const deleteFavourite = async (id: number) =>
  makeRequest(`favourites/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
