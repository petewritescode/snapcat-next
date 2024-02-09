import { ApiFavourite } from '@/types/api-favourite';
import { Favourite } from '@/types/favourite';

export const mapFavourite = ({
  id,
  image_id: imageId,
}: ApiFavourite): Favourite => ({ id, imageId });
