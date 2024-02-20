import { ApiVote } from '@/types/api-vote';
import { UserVote } from '@/types/user-vote';
import { Vote } from '@/types/vote';
import { Votes } from '@/types/votes';

export const mapVotes = (votes: ApiVote[], userId: string): Votes =>
  votes.reduce<Votes>((acc, vote) => {
    const imageVote: Vote = acc[vote.image_id] ?? { score: 0 };
    const score = Math.max(Math.min(vote.value, 1), -1);
    const userVote: UserVote | undefined =
      vote.sub_id === userId && score !== 0
        ? { id: vote.id, direction: score === 1 ? 'up' : 'down' }
        : undefined;

    return {
      ...acc,
      [vote.image_id]: {
        ...imageVote,
        ...(userVote ? { userVote } : {}),
        score: imageVote.score + score,
      },
    };
  }, {});
