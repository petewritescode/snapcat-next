import { ApiFavourite } from '@/types/api-favourite';
import { Favourite } from '@/types/favourite';
import { makeRequest } from './utils/make-request';
import { mapFavourite } from './utils/map-favourite';
import { getUserId } from '@/utils/get-user-id';

export const getFavourites = async (): Promise<Favourite[]> => {
  const userId = getUserId();

  const apiFavourites = await makeRequest<ApiFavourite[]>(
    `favourites?limit=100&sub_id=${encodeURIComponent(userId)}`,
  );

  return apiFavourites.map(mapFavourite);
};
