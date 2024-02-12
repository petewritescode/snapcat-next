'use client';

import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { FC, useOptimistic, useState, useTransition } from 'react';
import styles from './favourite-button.module.scss';
import { Button } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addFavourite } from '@/actions/add-favourite';
import { deleteFavourite } from '@/actions/delete-favourite';

type FavouriteButtonProps = {
  imageId: string;
  userId: string;
  initialFavouriteId?: number;
};

const temporaryFavouriteId = 999999999;

export const FavouriteButton: FC<FavouriteButtonProps> = ({
  imageId,
  userId,
  initialFavouriteId,
}) => {
  const [isPending, startTransition] = useTransition();
  const [favouriteId, setFavouriteId] = useState(initialFavouriteId);

  const [optimisticFavouriteId, setOptimisticIsFavourite] = useOptimistic(
    favouriteId,
    (_state, isFavourite: boolean) =>
      isFavourite ? temporaryFavouriteId : undefined,
  );

  const icon = optimisticFavouriteId ? faHeart : faHeartOutline;
  const label = optimisticFavouriteId ? 'Unfavourite' : 'Favourite';
  const className = clsx(styles.favourite, {
    [styles.active]: optimisticFavouriteId,
  });

  const handleClick = () => {
    startTransition(async () => {
      if (optimisticFavouriteId) {
        setOptimisticIsFavourite(false);
        await deleteFavourite(optimisticFavouriteId);
        setFavouriteId(undefined);
      } else {
        setOptimisticIsFavourite(true);
        const newFavouriteId = await addFavourite(imageId, userId);
        setFavouriteId(newFavouriteId);
      }
    });
  };

  return (
    <Button
      className={className}
      disabled={isPending}
      label={label}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </Button>
  );
};
