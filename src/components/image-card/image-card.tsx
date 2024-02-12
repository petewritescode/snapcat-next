import NextImage from 'next/image';
import { FC } from 'react';
import styles from './image-card.module.scss';
import { Image } from '@/types/image';
import { Favourite } from '../favourite/favourite';

export type ImageCardProps = {
  image: Image;
  favouriteId?: number;
};

export const ImageCard: FC<ImageCardProps> = ({ image, favouriteId }) => (
  <div className={styles.imageCard}>
    <NextImage className={styles.image} src={image.url} alt="Cat image" fill />

    <div className={styles.favourite}>
      <Favourite favouriteId={favouriteId} imageId={image.id} />
    </div>
  </div>
);
