import { deleteFavourite } from '@/api/delete-favourite';
import { deleteFavouriteAction } from './delete-favourite';

jest.mock('@/api/delete-favourite', () => ({
  deleteFavourite: jest.fn(),
}));

const mockDeleteFavourite = jest.mocked(deleteFavourite);

describe('deleteFavouriteAction', () => {
  it('deletes the favourite via the API', async () => {
    await deleteFavouriteAction(123);

    expect(mockDeleteFavourite).toHaveBeenCalledTimes(1);
    expect(mockDeleteFavourite).toHaveBeenCalledWith(123);
  });
});
