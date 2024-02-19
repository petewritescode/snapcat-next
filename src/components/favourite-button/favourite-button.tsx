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
import { Favourite } from '@/types/favourite';

export type FavouriteButtonProps = {
  imageId: string;
  favourite?: Favourite;
};

export const FavouriteButton: FC<FavouriteButtonProps> = ({
  imageId,
  favourite,
}) => {
  const [favouriteId, setFavouriteId] = useState(favourite?.id);
  const isFavourite = favouriteId !== undefined;
  const [optimisticIsFavourite, setOptimisticIsFavourite] =
    useOptimistic(isFavourite);
  const icon = optimisticIsFavourite ? faHeart : faHeartOutline;
  const label = optimisticIsFavourite ? 'Unfavourite' : 'Favourite';
  const className = clsx(
    styles.favourite,
    optimisticIsFavourite && styles.active,
  );

  const handleSubmit = async () => {
    setOptimisticIsFavourite(!isFavourite);

    try {
      if (isFavourite) {
        await deleteFavourite(favouriteId);
        setFavouriteId(undefined);
      } else {
        const newFavouriteId = await addFavourite(imageId);
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
