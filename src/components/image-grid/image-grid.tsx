import { Image } from '@/types/image';
import { FC } from 'react';
import { Grid } from '../grid/grid';
import { GridItem } from '../grid/grid-item';
import { ImageCard } from '../image-card/image-card';
import { Favourite } from '@/types/favourite';

export type ImageGridProps = {
  images: Image[];
  favourites: Favourite[];
};

export const ImageGrid: FC<ImageGridProps> = ({ images, favourites }) => (
  <Grid>
    {images.map((image) => {
      const favouriteId = favourites.find(
        (favourite) => favourite.imageId === image.id,
      )?.id;

      return (
        <GridItem key={image.id}>
          <ImageCard image={image} favouriteId={favouriteId} />
        </GridItem>
      );
    })}
  </Grid>
);
