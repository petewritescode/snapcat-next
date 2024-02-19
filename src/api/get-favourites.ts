import { ApiFavourite } from '@/types/api-favourite';
import { Favourites } from '@/types/favourites';
import { getUserId } from '@/utils/get-user-id';
import { makeRequest } from './utils/make-request';
import { mapFavourites } from './utils/map-favourites';

export const getFavourites = async (): Promise<Favourites> => {
  const userId = getUserId();

  const apiFavourites = await makeRequest<ApiFavourite[]>(
    `favourites?limit=100&sub_id=${encodeURIComponent(userId)}`,
  );

  return mapFavourites(apiFavourites);
};
