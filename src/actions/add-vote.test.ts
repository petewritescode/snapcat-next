import { addVote } from '@/api/add-vote';
import { addVoteAction } from './add-vote';

jest.mock('@/api/add-vote', () => ({
  addVote: jest.fn(),
}));

const mockAddVote = jest.mocked(addVote);

describe('addVoteAction', () => {
  it('adds a new vote via the API', async () => {
    await addVoteAction('abc', 'up');

    expect(mockAddVote).toHaveBeenCalledTimes(1);
    expect(mockAddVote).toHaveBeenCalledWith('abc', 'up');
  });

  it('returns the new vote ID', async () => {
    mockAddVote.mockResolvedValue(123);

    const id = await addVoteAction('abc', 'up');

    expect(id).toBe(123);
  });
});
