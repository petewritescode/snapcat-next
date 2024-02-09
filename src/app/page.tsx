import { getFavourites } from '@/api/get-favourites';
import { getImages } from '@/api/get-images';
import { ImageGrid } from '@/components/image-grid/image-grid';
import { getUserId } from '@/utils/get-user-id';
import { NextPage } from 'next';

const HomePage: NextPage = async () => {
  const userId = getUserId();

  const [images, favourites] = await Promise.all([
    getImages(),
    getFavourites(userId),
  ]);

  return <ImageGrid images={images} favourites={favourites} />;
};

export default HomePage;
