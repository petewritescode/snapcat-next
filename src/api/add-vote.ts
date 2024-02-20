import { makeRequest } from './utils/make-request';
import { getUserId } from '@/utils/get-user-id';
import { VoteDirection } from '@/types/vote-direction';
import { ApiAddVoteResult } from '@/types/api-add-vote-result';
import { voteDirectionScore } from '@/constants/vote-direction-score';

export const addVote = async (imageId: string, direction: VoteDirection) => {
  const userId = getUserId();

  const body = JSON.stringify({
    sub_id: userId,
    image_id: imageId,
    value: voteDirectionScore[direction],
  });

  const result = await makeRequest<ApiAddVoteResult>('votes', {
    method: 'POST',
    body,
  });

  return result.id;
};
