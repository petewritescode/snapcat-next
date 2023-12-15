import { ApiImage } from '@/types/api-image';
import { Image } from '@/types/image';
import { getImages } from './get-images';
import { makeRequest } from './utils/make-request';

jest.mock('./utils/make-request', () => ({
  makeRequest: jest.fn(),
}));

const makeRequestMock = jest.mocked(makeRequest);

const apiImages: ApiImage[] = [
  {
    id: 'abc',
    url: 'https://image.com/cat1.jpg',
    width: 200,
    height: 100,
  },
  {
    id: 'bcd',
    url: 'https://image.com/cat2.jpg',
    width: 300,
    height: 150,
  },
];

const images: Image[] = apiImages;

describe('getImages', () => {
  it('calls the correct API endpoint', async () => {
    makeRequestMock.mockReturnValue(Promise.resolve(apiImages));

    await getImages();

    expect(makeRequestMock).toHaveBeenCalledWith('images?limit=100');
  });

  it('returns the mapped images', async () => {
    makeRequestMock.mockReturnValue(Promise.resolve(apiImages));

    const result = await getImages();

    expect(result).toStrictEqual(images);
  });
});
