import { makeRequest } from './utils/make-request';

export const deleteVote = async (id: number) =>
  makeRequest(`votes/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
