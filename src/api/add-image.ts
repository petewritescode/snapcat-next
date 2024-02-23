import { getUserId } from '@/utils/get-user-id';
import { makeRequest } from './utils/make-request';

export const addImage = async (image: File) => {
  const userId = getUserId();
  const body = new FormData();
  body.append('sub_id', userId);
  body.append('file', image);

  return await makeRequest('images/upload', { method: 'POST', body });
};
