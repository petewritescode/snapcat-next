import { deleteVote } from '@/api/delete-vote';
import { deleteVoteAction } from './delete-vote';

jest.mock('@/api/delete-vote');

const mockDeleteVote = jest.mocked(deleteVote);

describe('deleteVoteAction', () => {
  it('deletes the vote via the API', async () => {
    await deleteVoteAction(123);

    expect(mockDeleteVote).toHaveBeenCalledTimes(1);
    expect(mockDeleteVote).toHaveBeenCalledWith(123);
  });
});
