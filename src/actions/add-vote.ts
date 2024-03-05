'use server';

import { addVote } from '@/api/add-vote';
import { VoteDirection } from '@/types/vote-direction';

export const addVoteAction = async (
  imageId: string,
  direction: VoteDirection,
) => addVote(imageId, direction);
