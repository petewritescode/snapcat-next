import { VoteDirection } from '@/types/vote-direction';

export const voteDirectionScore: Record<VoteDirection, number> = {
  down: -1,
  up: 1,
};
