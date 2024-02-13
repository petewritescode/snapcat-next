import { makeRequest } from './utils/make-request';
import { deleteFavourite } from './delete-favourite';

jest.mock('./utils/make-request', () => ({
  makeRequest: jest.fn(),
}));

const mockMakeRequest = jest.mocked(makeRequest);

describe('deleteFavourite', () => {
  it('calls the correct API endpoint', async () => {
    mockMakeRequest.mockReturnValue(Promise.resolve());

    await deleteFavourite(123456);

    expect(mockMakeRequest).toHaveBeenCalledWith('favourites/123456', {
      method: 'DELETE',
    });
  });
});
