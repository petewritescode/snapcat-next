import { Image } from '@/types/image';
import { FC } from 'react';
import { Grid } from '../grid/grid';
import { GridItem } from '../grid/grid-item';
import { ImageCard } from '../image-card/image-card';
import { Favourites } from '@/types/favourites';
import { Votes } from '@/types/votes';

export type ImageGridProps = {
  images: Image[];
  favourites: Favourites;
  votes: Votes;
};

export const ImageGrid: FC<ImageGridProps> = ({
  images,
  favourites,
  votes,
}) => (
  <Grid>
    {images.map((image) => (
      <GridItem key={image.id}>
        <ImageCard
          image={image}
          favourite={favourites[image.id]}
          vote={votes[image.id]}
        />
      </GridItem>
    ))}
  </Grid>
);
