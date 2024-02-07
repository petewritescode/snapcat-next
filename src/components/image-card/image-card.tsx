import NextImage from 'next/image';
import { FC } from 'react';
import styles from './image-card.module.scss';
import { Image } from '@/types/image';

export type ImageCardProps = {
  image: Image;
};

export const ImageCard: FC<ImageCardProps> = ({ image }) => (
  <div className={styles.imageCard}>
    <NextImage className={styles.image} src={image.url} alt="Cat image" fill />
  </div>
);
