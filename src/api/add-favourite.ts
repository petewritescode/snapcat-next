import { ApiAddFavouriteResult } from '@/types/api-add-favourite-result';
import { makeRequest } from './utils/make-request';
import { getUserId } from '@/utils/get-user-id';

export const addFavourite = async (imageId: string) => {
  const userId = getUserId();

  const body = JSON.stringify({
    sub_id: userId,
    image_id: imageId,
  });

  const result = await makeRequest<ApiAddFavouriteResult>('favourites', {
    method: 'POST',
    body,
  });

  return result.id;
};
