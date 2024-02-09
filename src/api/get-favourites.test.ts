import { ApiImage } from '@/types/api-image';
import { Image } from '@/types/image';
import { getFavourites } from './get-favourites';
import { makeRequest } from './utils/make-request';
import { ApiFavourite } from '@/types/api-favourite';
import { Favourite } from '@/types/favourite';

jest.mock('./utils/make-request', () => ({
  makeRequest: jest.fn(),
}));

const makeRequestMock = jest.mocked(makeRequest);

const apiFavourites = [
  {
    id: 123,
    image_id: 'abc123',
    created_at: '2024-01-01T12.34.56.000Z',
  } as ApiFavourite,
  {
    id: 234,
    image_id: 'bcd234',
    created_at: '2024-02-02T12.34.56.000Z',
  } as ApiFavourite,
];

const favourites: Favourite[] = [
  {
    id: 123,
    imageId: 'abc123',
  },
  {
    id: 234,
    imageId: 'bcd234',
  },
];

describe('getFavourites', () => {
  it('calls the correct API endpoint', async () => {
    makeRequestMock.mockReturnValue(Promise.resolve(apiFavourites));

    await getFavourites('a1b2c3d4');

    expect(makeRequestMock).toHaveBeenCalledWith(
      'favourites?limit=100&sub_id=a1b2c3d4',
    );
  });

  it('returns the mapped favourites with additional properties stripped', async () => {
    makeRequestMock.mockReturnValue(Promise.resolve(apiFavourites));

    const result = await getFavourites('a1b2c3d4');

    expect(result).toStrictEqual(favourites);
  });
});
