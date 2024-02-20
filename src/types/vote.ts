import { UserVote } from './user-vote';

export type Vote = {
  score: number;
  userVote?: UserVote;
};
