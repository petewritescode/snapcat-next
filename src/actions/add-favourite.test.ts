import { addFavourite } from '@/api/add-favourite';
import { addFavouriteAction } from './add-favourite';

jest.mock('@/api/add-favourite');

const mockAddFavourite = jest.mocked(addFavourite);

describe('addFavouriteAction', () => {
  it('adds a new favourite via the API', async () => {
    await addFavouriteAction('abc');

    expect(mockAddFavourite).toHaveBeenCalledTimes(1);
    expect(mockAddFavourite).toHaveBeenCalledWith('abc');
  });

  it('returns the new favourite ID', async () => {
    mockAddFavourite.mockResolvedValue(123);

    const id = await addFavouriteAction('abc');

    expect(id).toBe(123);
  });
});
