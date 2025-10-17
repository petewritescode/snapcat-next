import NextImage from 'next/image';
import { FC } from 'react';
import styles from './image-card.module.css';
import { Image } from '@/types/image';
import { Favourite } from '@/types/favourite';
import { ImageFavourite } from '../image-favourite/image-favourite';
import { Vote } from '@/types/vote';
import { ImageVote } from '../image-vote/image-vote';

export type ImageCardProps = {
  image: Image;
  favourite?: Favourite;
  vote?: Vote;
  priority?: boolean;
};

export const ImageCard: FC<ImageCardProps> = ({
  image,
  favourite,
  vote,
  priority,
}) => (
  <div className={styles.imageCard}>
    <NextImage
      className={styles.image}
      src={image.url}
      sizes="(max-width: 30rem) 100vw, (max-width: 50rem) 50vw, (max-width: 70rem) 33vw, 25vw"
      alt="Cat image"
      priority={priority}
      fill
    />

    <div className={styles.favourite}>
      <ImageFavourite imageId={image.id} favourite={favourite} />
    </div>

    <div className={styles.vote}>
      <ImageVote imageId={image.id} vote={vote} />
    </div>
  </div>
);
