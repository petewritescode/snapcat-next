'use server';

import { addVote as addVoteApi } from '@/api/add-vote';
import { VoteDirection } from '@/types/vote-direction';

export const addVote = async (imageId: string, direction: VoteDirection) =>
  addVoteApi(imageId, direction);
