'use client';

import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FC, useOptimistic, useState } from 'react';
import styles from './vote-button.module.scss';
import { Vote } from '@/types/vote';
import { ArrowButton } from './arrow-button';
import { VoteDirection } from '@/types/vote-direction';
import { addVote } from '@/actions/add-vote';
import { deleteVote } from '@/actions/delete-vote';
import { optimisticUpdateId } from '@/constants/optimistic-update-id';
import { voteDirectionScore } from '@/constants/vote-direction-score';

export type VoteButtonProps = {
  imageId: string;
  vote?: Vote;
};

export const VoteButton: FC<VoteButtonProps> = ({
  imageId,
  vote: initialVote,
}) => {
  const [vote, setVote] = useState(initialVote);
  const [optimisticVote, setOptimisticVote] = useOptimistic(vote);

  const handleSubmit = (direction: VoteDirection) => async () => {
    try {
      if (direction === vote?.userVote?.direction) {
        const newVote: Vote = {
          score: vote.score - voteDirectionScore[vote.userVote.direction],
        };

        setOptimisticVote(newVote);
        await deleteVote(vote.userVote.id);
        setVote(newVote);
      } else {
        const newVote: Vote = {
          score:
            (vote?.score ?? 0) -
            (vote?.userVote ? voteDirectionScore[vote.userVote.direction] : 0) +
            voteDirectionScore[direction],
          userVote: {
            id: optimisticUpdateId,
            direction,
          },
        };

        setOptimisticVote(newVote);
        const newVoteId = await addVote(imageId, direction);

        setVote({
          ...newVote,
          userVote: {
            id: newVoteId,
            direction,
          },
        });
      }
    } catch {
      // Suppress errors so we don't interrupt the user experience
    }
  };

  return (
    <form className={styles.votes}>
      <ArrowButton
        icon={faArrowUp}
        label="Vote up"
        isActive={optimisticVote?.userVote?.direction === 'up'}
        onClick={handleSubmit('up')}
      />

      <div className={styles.score}>{optimisticVote?.score ?? 0}</div>

      <ArrowButton
        icon={faArrowDown}
        label="Vote down"
        isActive={optimisticVote?.userVote?.direction === 'down'}
        onClick={handleSubmit('down')}
      />
    </form>
  );
};