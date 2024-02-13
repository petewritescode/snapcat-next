import { getFavourites } from '@/api/get-favourites';
import { getImages } from '@/api/get-images';
import { ImageGrid } from '@/components/image-grid/image-grid';
import { NextPage } from 'next';

const HomePage: NextPage = async () => {
  const [images, favourites] = await Promise.all([
    getImages(),
    getFavourites(),
  ]);

  return <ImageGrid images={images} favourites={favourites} />;
};

export default HomePage;
