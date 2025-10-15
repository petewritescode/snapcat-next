import { getUserId } from '@/utils/get-user-id';
import { getVotes } from './get-votes';
import { makeRequest } from './utils/make-request';
import { ApiVote } from '@/types/api-vote';
import { Votes } from '@/types/votes';

jest.mock('@/utils/get-user-id');
jest.mock('./utils/make-request');

const mockgetUserId = jest.mocked(getUserId);
const mockMakeRequest = jest.mocked(makeRequest);

describe('getVotes', () => {
  it('calls the correct API endpoint', async () => {
    const apiVotes: ApiVote[] = [];

    mockgetUserId.mockResolvedValue('a1b2c3d4');
    mockMakeRequest.mockResolvedValue(apiVotes);

    await getVotes();

    expect(mockMakeRequest).toHaveBeenCalledWith(
      'votes?limit=100&attach_image=0&order=DESC',
    );
  });

  it('returns the mapped votes', async () => {
    const apiVotes: ApiVote[] = [
      {
        id: 123,
        image_id: 'abc123',
        sub_id: 'b2c3d4e5',
        value: 1,
      },
      {
        id: 234,
        image_id: 'bcd234',
        sub_id: 'c3d4e5f6',
        value: -1,
      },
    ];

    const votes: Votes = {
      abc123: { score: 1 },
      bcd234: { score: -1 },
    };

    mockgetUserId.mockResolvedValue('a1b2c3d4');
    mockMakeRequest.mockResolvedValue(apiVotes);

    const result = await getVotes();

    expect(result).toStrictEqual(votes);
  });

  it('adds up all vote scores for each image', async () => {
    const apiVotes: ApiVote[] = [
      {
        id: 123,
        image_id: 'abc123',
        sub_id: 'b2c3d4e5',
        value: 1,
      },
      {
        id: 234,
        image_id: 'abc123',
        sub_id: 'c3d4e5f6',
        value: 1,
      },
      {
        id: 345,
        image_id: 'abc123',
        sub_id: 'd4e5f6g7',
        value: 0,
      },
      {
        id: 456,
        image_id: 'abc123',
        sub_id: 'e5f6g7h8',
        value: -1,
      },
      {
        id: 567,
        image_id: 'abc123',
        sub_id: 'f6g7h8i9',
        value: 1,
      },
    ];

    const votes: Votes = {
      abc123: { score: 2 },
    };

    mockgetUserId.mockResolvedValue('a1b2c3d4');
    mockMakeRequest.mockResolvedValue(apiVotes);

    const result = await getVotes();

    expect(result).toStrictEqual(votes);
  });

  it('caps scores to a value between -1 and 1', async () => {
    const apiVotes: ApiVote[] = [
      {
        id: 123,
        image_id: 'abc123',
        sub_id: 'b2c3d4e5',
        value: 10,
      },
      {
        id: 234,
        image_id: 'bcd234',
        sub_id: 'c3d4e5f6',
        value: -10,
      },
    ];

    const votes: Votes = {
      abc123: { score: 1 },
      bcd234: { score: -1 },
    };

    mockgetUserId.mockResolvedValue('a1b2c3d4');
    mockMakeRequest.mockResolvedValue(apiVotes);

    const result = await getVotes();

    expect(result).toStrictEqual(votes);
  });

  it('includes the current user vote where applicable', async () => {
    const apiVotes: ApiVote[] = [
      {
        id: 123,
        image_id: 'abc123',
        sub_id: 'a1b2c3d4',
        value: 1,
      },
      {
        id: 234,
        image_id: 'abc123',
        sub_id: 'b2c3d4e5',
        value: 1,
      },
      {
        id: 345,
        image_id: 'bcd234',
        sub_id: 'a1b2c3d4',
        value: -1,
      },
      {
        id: 456,
        image_id: 'bcd234',
        sub_id: 'b2c3d4e5',
        value: -1,
      },
      {
        id: 567,
        image_id: 'cde345',
        sub_id: 'a1b2c3d4',
        value: 0,
      },
    ];

    const votes: Votes = {
      abc123: {
        score: 2,
        userVote: {
          id: 123,
          direction: 'up',
        },
      },
      bcd234: {
        score: -2,
        userVote: {
          id: 345,
          direction: 'down',
        },
      },
      cde345: {
        score: 0,
      },
    };

    mockgetUserId.mockResolvedValue('a1b2c3d4');
    mockMakeRequest.mockResolvedValue(apiVotes);

    const result = await getVotes();

    expect(result).toStrictEqual(votes);
  });
});
