'use server';

import { deleteVote } from '@/api/delete-vote';

export const deleteVoteAction = async (id: number) => deleteVote(id);
