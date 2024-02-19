import { Image } from '@/types/image';
import { FC } from 'react';
import { Grid } from '../grid/grid';
import { GridItem } from '../grid/grid-item';
import { ImageCard } from '../image-card/image-card';
import { Favourites } from '@/types/favourites';

export type ImageGridProps = {
  images: Image[];
  favourites: Favourites;
};

export const ImageGrid: FC<ImageGridProps> = ({ images, favourites }) => (
  <Grid>
    {images.map((image) => (
      <GridItem key={image.id}>
        <ImageCard image={image} favourite={favourites[image.id]} />
      </GridItem>
    ))}
  </Grid>
);
