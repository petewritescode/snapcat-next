import { getFavourites } from '@/api/get-favourites';
import { getImages } from '@/api/get-images';
import { getVotes } from '@/api/get-votes';
import { ImageGrid } from '@/components/image-grid/image-grid';
import { NextPage } from 'next';

const HomePage: NextPage = async () => {
  const [images, favourites, votes] = await Promise.all([
    getImages(),
    getFavourites(),
    getVotes(),
  ]);

  return <ImageGrid images={images} favourites={favourites} votes={votes} />;
};

export default HomePage;
