'use server';

import { deleteVote as deleteVoteApi } from '@/api/delete-vote';

export const deleteVote = async (id: number) => deleteVoteApi(id);
