import NextImage from 'next/image';
import { FC } from 'react';
import styles from './image-card.module.scss';
import { Image } from '@/types/image';
import { Favourite } from '@/types/favourite';
import { FavouriteButton } from '../favourite-button/favourite-button';
import { getUserId } from '@/utils/get-user-id';

export type ImageCardProps = {
  image: Image;
  favourite?: Favourite;
};

export const ImageCard: FC<ImageCardProps> = ({ image, favourite }) => {
  const userId = getUserId();

  return (
    <div className={styles.imageCard}>
      <NextImage
        className={styles.image}
        src={image.url}
        alt="Cat image"
        fill
      />

      <div className={styles.favourite}>
        <FavouriteButton
          imageId={image.id}
          userId={userId}
          initialFavouriteId={favourite?.id}
        />
      </div>
    </div>
  );
};
