import { getUserId } from '@/utils/get-user-id';
import { getFavourites } from './get-favourites';
import { makeRequest } from './utils/make-request';
import { ApiFavourite } from '@/types/api-favourite';
import { Favourites } from '@/types/favourites';

jest.mock('@/utils/get-user-id', () => ({
  getUserId: jest.fn(),
}));

const mockgetUserId = jest.mocked(getUserId);

jest.mock('./utils/make-request', () => ({
  makeRequest: jest.fn(),
}));

const mockMakeRequest = jest.mocked(makeRequest);

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

const favourites: Favourites = {
  abc123: { id: 123 },
  bcd234: { id: 234 },
};

describe('getFavourites', () => {
  it('calls the correct API endpoint', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve(apiFavourites));

    await getFavourites();

    expect(mockMakeRequest).toHaveBeenCalledWith(
      'favourites?limit=100&sub_id=a1b2c3d4',
    );
  });

  it('returns the mapped favourites', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve(apiFavourites));

    const result = await getFavourites();

    expect(result).toStrictEqual(favourites);
  });
});
