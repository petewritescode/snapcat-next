'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { FC, useOptimistic, useState } from 'react';
import { SubmitButton } from '../submit-button/submit-button';
import { deleteFavourite } from '@/actions/delete-favourite';
import { addFavourite } from '@/actions/add-favourite';
import styles from './favourite-button.module.scss';

export type FavouriteButtonProps = {
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
  const [favouriteId, setFavouriteId] = useState(initialFavouriteId);
  const [optimisticFavouriteId, setOptimisticIsFavourite] = useOptimistic(
    favouriteId,
    (_state, isFavourite: boolean) =>
      isFavourite ? temporaryFavouriteId : undefined,
  );
  const isFavourite = optimisticFavouriteId !== undefined;
  const icon = isFavourite ? faHeart : faHeartOutline;
  const label = isFavourite ? 'Unfavourite' : 'Favourite';
  const className = clsx(styles.favourite, {
    [styles.active]: isFavourite,
  });

  const handleSubmit = async () => {
    setOptimisticIsFavourite(!isFavourite);

    try {
      if (isFavourite) {
        await deleteFavourite(optimisticFavouriteId);
        setFavouriteId(undefined);
      } else {
        const newFavouriteId = await addFavourite(imageId, userId);
        setFavouriteId(newFavouriteId);
      }
    } catch {
      // Suppress errors so we don't interrupt the user experience
    }
  };

  return (
    <form action={handleSubmit}>
      <SubmitButton className={className} label={label}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </SubmitButton>
    </form>
  );
};
