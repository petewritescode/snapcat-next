import { Image } from '@/types/image';
import NextImage from 'next/image';
import { FC } from 'react';
import { Grid } from '../grid/grid';
import { GridItem } from '../grid/grid-item';
import { ImageCard } from '../image-card/image-card';

export type ImageGridProps = {
  images: Image[];
};

export const ImageGrid: FC<ImageGridProps> = ({ images }) => (
  <Grid>
    {images.map((image) => (
      <GridItem key={image.id}>
        <ImageCard image={image} />
      </GridItem>
    ))}
  </Grid>
);
