'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { FC, useOptimistic, useState } from 'react';
import { SubmitButton } from '../submit-button/submit-button';
import { deleteFavouriteAction } from '@/actions/delete-favourite';
import { addFavouriteAction } from '@/actions/add-favourite';
import styles from './image-favourite.module.css';
import { Favourite } from '@/types/favourite';
import { optimisticUpdateId } from '@/constants/optimistic-update-id';

export type ImageFavouriteProps = {
  imageId: string;
  favourite?: Favourite;
};

export const ImageFavourite: FC<ImageFavouriteProps> = ({
  imageId,
  favourite: initialFavourite,
}) => {
  const [favourite, setFavourite] = useState(initialFavourite);
  const [optimisticFavourite, setOptimisticFavourite] =
    useOptimistic(favourite);
  const isFavourite = optimisticFavourite !== undefined;
  const icon = isFavourite ? faHeart : faHeartOutline;
  const label = isFavourite ? 'Remove favourite' : 'Add favourite';
  const className = clsx(styles.favourite, isFavourite && styles.active);

  const handleSubmit = async () => {
    setOptimisticFavourite(favourite ? undefined : { id: optimisticUpdateId });

    try {
      if (isFavourite) {
        await deleteFavouriteAction(optimisticFavourite.id);
        setFavourite(undefined);
      } else {
        const newFavouriteId = await addFavouriteAction(imageId);
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
