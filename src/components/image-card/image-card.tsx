import NextImage from 'next/image';
import { FC } from 'react';
import styles from './image-card.module.scss';
import { Image } from '@/types/image';
import { Favourite } from '@/types/favourite';
import { FavouriteButton } from '../favourite-button/favourite-button';
import { Vote } from '@/types/vote';
import { VoteButton } from '../vote-button/vote-button';

export type ImageCardProps = {
  image: Image;
  favourite?: Favourite;
  vote?: Vote;
};

export const ImageCard: FC<ImageCardProps> = ({ image, favourite, vote }) => (
  <div className={styles.imageCard}>
    <NextImage className={styles.image} src={image.url} alt="Cat image" fill />

    <div className={styles.favourite}>
      <FavouriteButton imageId={image.id} favourite={favourite} />
    </div>

    <div className={styles.vote}>
      <VoteButton imageId={image.id} vote={vote} />
    </div>
  </div>
);
