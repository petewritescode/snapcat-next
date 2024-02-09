import { ApiFavourite } from '@/types/api-favourite';
import { Favourite } from '@/types/favourite';
import { makeRequest } from './utils/make-request';
import { mapFavourite } from './utils/map-favourite';

export const getFavourites = async (userId: string): Promise<Favourite[]> => {
  const apiFavourites = await makeRequest<ApiFavourite[]>(
    `favourites?limit=100&sub_id=${encodeURIComponent(userId)}`,
  );

  return apiFavourites.map(mapFavourite);
};
