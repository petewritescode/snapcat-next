import { getImages } from '@/api/get-images';
import NextImage from 'next/image';
import { FC } from 'react';

const HomePage: FC = async () => {
  const images = await getImages();

  return images.map((image) => (
    <div key={image.id}>
      <NextImage
        src={image.url}
        alt="Cat image"
        width={image.width}
        height={image.height}
      />
    </div>
  ));
};

export default HomePage;
