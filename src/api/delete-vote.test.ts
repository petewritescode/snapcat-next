import { makeRequest } from './utils/make-request';
import { deleteVote } from './delete-vote';

jest.mock('./utils/make-request');

const mockMakeRequest = jest.mocked(makeRequest);

describe('deleteVote', () => {
  it('calls the correct API endpoint', async () => {
    mockMakeRequest.mockReturnValue(Promise.resolve());

    await deleteVote(123456);

    expect(mockMakeRequest).toHaveBeenCalledWith('votes/123456', {
      method: 'DELETE',
    });
  });
});
