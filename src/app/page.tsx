import { getFavourites } from '@/api/get-favourites';
import { getImages } from '@/api/get-images';
import { getVotes } from '@/api/get-votes';
import { Grid } from '@/components/grid/grid';
import { GridItem } from '@/components/grid/grid-item';
import { ImageCard } from '@/components/image-card/image-card';
import { NextPage } from 'next';

const HomePage: NextPage = async () => {
  const [images, favourites, votes] = await Promise.all([
    getImages(),
    getFavourites(),
    getVotes(),
  ]);

  return (
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
};

export default HomePage;
