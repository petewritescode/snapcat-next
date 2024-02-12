import { FC } from 'react';
import { getUserId } from '@/utils/get-user-id';
import { FavouriteButton } from './favourite-button';

export type FavouriteProps = {
  imageId: string;
  favouriteId?: number;
};

export const Favourite: FC<FavouriteProps> = ({ imageId, favouriteId }) => {
  const userId = getUserId();

  return (
    <FavouriteButton
      imageId={imageId}
      userId={userId}
      initialFavouriteId={favouriteId}
    />
  );
};
