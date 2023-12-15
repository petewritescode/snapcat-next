import { ApiImage } from '@/types/api-image';
import { Image } from '@/types/image';
import { mapApiImageToImage } from './map-api-image-to-image';

describe('mapApiImageToImage', () => {
  it('maps an API image to an image', () => {
    const apiImage: ApiImage = {
      id: 'abc123',
      url: 'https://image.com/cat.jpg',
      width: 200,
      height: 100,
    };

    const image: Image = { ...apiImage };

    expect(mapApiImageToImage(apiImage)).toStrictEqual(image);
  });
});
