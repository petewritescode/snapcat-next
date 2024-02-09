import { ApiImage } from '@/types/api-image';
import { Image } from '@/types/image';
import { mapImage } from './map-image';

describe('mapImage', () => {
  it('maps an API image to an image, stripping unneeded additional properties', () => {
    const apiImage = {
      id: 'abc123',
      url: 'https://image.com/cat.jpg',
      width: 200,
      height: 100,
    } as ApiImage;

    const image: Image = {
      id: 'abc123',
      url: 'https://image.com/cat.jpg',
    };

    expect(mapImage(apiImage)).toStrictEqual(image);
  });
});
