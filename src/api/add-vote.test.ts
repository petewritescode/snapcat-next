import { getUserId } from '@/utils/get-user-id';
import { makeRequest } from './utils/make-request';
import { ApiAddVoteResult } from '@/types/api-add-vote-result';
import { addVote } from './add-vote';

jest.mock('@/utils/get-user-id', () => ({
  getUserId: jest.fn(),
}));

const mockgetUserId = jest.mocked(getUserId);

jest.mock('./utils/make-request', () => ({
  makeRequest: jest.fn(),
}));

const mockMakeRequest = jest.mocked(makeRequest);

const apiResult: ApiAddVoteResult = {
  id: 123456,
};

describe('addVote', () => {
  it('calls the correct API endpoint for upvotes', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve(apiResult));

    await addVote('abc123', 'up');

    expect(mockMakeRequest).toHaveBeenCalledWith('votes', {
      method: 'POST',
      body: JSON.stringify({
        sub_id: 'a1b2c3d4',
        image_id: 'abc123',
        value: 1,
      }),
      isJson: true,
    });
  });

  it('calls the correct API endpoint for downvotes', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve(apiResult));

    await addVote('abc123', 'down');

    expect(mockMakeRequest).toHaveBeenCalledWith('votes', {
      method: 'POST',
      body: JSON.stringify({
        sub_id: 'a1b2c3d4',
        image_id: 'abc123',
        value: -1,
      }),
      isJson: true,
    });
  });

  it('returns the new vote ID', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve(apiResult));

    const result = await addVote('abc123', 'up');

    expect(result).toBe(123456);
  });
});
