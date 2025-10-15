import { makeRequest } from './utils/make-request';
import { ApiVote } from '@/types/api-vote';
import { mapVotes } from './utils/map-votes';
import { getUserId } from '@/utils/get-user-id';
import { Votes } from '@/types/votes';

export const getVotes = async (): Promise<Votes> => {
  const userId = await getUserId();

  const apiVotes = await makeRequest<ApiVote[]>(
    'votes?limit=100&attach_image=0&order=DESC',
  );

  return mapVotes(apiVotes, userId);
};
