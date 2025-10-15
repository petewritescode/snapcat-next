import { getUserId } from '@/utils/get-user-id';
import { getFavourites } from './get-favourites';
import { makeRequest } from './utils/make-request';
import { ApiFavourite } from '@/types/api-favourite';
import { Favourites } from '@/types/favourites';

jest.mock('@/utils/get-user-id');
jest.mock('./utils/make-request');

const mockgetUserId = jest.mocked(getUserId);
const mockMakeRequest = jest.mocked(makeRequest);

const apiFavourites: ApiFavourite[] = [
  {
    id: 123,
    image_id: 'abc123',
  },
  {
    id: 234,
    image_id: 'bcd234',
  },
];

const favourites: Favourites = {
  abc123: { id: 123 },
  bcd234: { id: 234 },
};

describe('getFavourites', () => {
  it('calls the correct API endpoint', async () => {
    mockgetUserId.mockResolvedValue('a1b2c3d4');
    mockMakeRequest.mockResolvedValue(apiFavourites);

    await getFavourites();

    expect(mockMakeRequest).toHaveBeenCalledWith(
      'favourites?limit=100&attach_image=0&order=DESC&sub_id=a1b2c3d4',
    );
  });

  it('returns the mapped favourites', async () => {
    mockgetUserId.mockResolvedValue('a1b2c3d4');
    mockMakeRequest.mockResolvedValue(apiFavourites);

    const result = await getFavourites();

    expect(result).toStrictEqual(favourites);
  });
});
