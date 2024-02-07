import { getImages } from '@/api/get-images';
import { ImageGrid } from '@/components/image-grid/image-grid';
import { NextPage } from 'next';
import NextImage from 'next/image';

const HomePage: NextPage = async () => {
  const images = await getImages();

  return <ImageGrid images={images} />;
};

export default HomePage;
