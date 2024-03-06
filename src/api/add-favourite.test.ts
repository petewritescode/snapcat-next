import { getUserId } from '@/utils/get-user-id';
import { makeRequest } from './utils/make-request';
import { ApiAddFavouriteResult } from '@/types/api-add-favourite-result';
import { addFavourite } from './add-favourite';

jest.mock('@/utils/get-user-id');
jest.mock('./utils/make-request');

const mockgetUserId = jest.mocked(getUserId);
const mockMakeRequest = jest.mocked(makeRequest);

const apiResult: ApiAddFavouriteResult = {
  id: 123456,
};

describe('addFavourite', () => {
  it('calls the correct API endpoint', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve(apiResult));

    await addFavourite('abc123');

    expect(mockMakeRequest).toHaveBeenCalledWith('favourites', {
      method: 'POST',
      body: JSON.stringify({ sub_id: 'a1b2c3d4', image_id: 'abc123' }),
      isJson: true,
    });
  });

  it('returns the new favourite ID', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve(apiResult));

    const result = await addFavourite('abc123');

    expect(result).toBe(123456);
  });
});
