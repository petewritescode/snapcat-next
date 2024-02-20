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
import { optimisticUpdateId } from '@/constants/optimistic-update-id';

export type FavouriteButtonProps = {
  imageId: string;
  favourite?: Favourite;
};

export const FavouriteButton: FC<FavouriteButtonProps> = ({
  imageId,
  favourite: initialFavourite,
}) => {
  const [favourite, setFavourite] = useState(initialFavourite);
  const [optimisticFavourite, setOptimisticFavourite] =
    useOptimistic(favourite);
  const isFavourite = optimisticFavourite !== undefined;
  const icon = isFavourite ? faHeart : faHeartOutline;
  const label = isFavourite ? 'Unfavourite' : 'Favourite';
  const className = clsx(styles.favourite, isFavourite && styles.active);

  const handleSubmit = async () => {
    setOptimisticFavourite(favourite ? undefined : { id: optimisticUpdateId });

    try {
      if (isFavourite) {
        await deleteFavourite(optimisticFavourite.id);
        setFavourite(undefined);
      } else {
        const newFavouriteId = await addFavourite(imageId);
        setFavourite({ id: newFavouriteId });
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
