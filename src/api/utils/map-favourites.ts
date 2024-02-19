import { ApiFavourite } from '@/types/api-favourite';
import { Favourites } from '@/types/favourites';

export const mapFavourites = (apiFavourites: ApiFavourite[]): Favourites =>
  apiFavourites.reduce<Favourites>(
    (acc, favourite) => ({
      ...acc,
      [favourite.image_id]: { id: favourite.id },
    }),
    {},
  );
