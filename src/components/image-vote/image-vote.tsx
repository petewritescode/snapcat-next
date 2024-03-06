'use client';

import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FC, useOptimistic, useState } from 'react';
import styles from './image-vote.module.scss';
import { Vote } from '@/types/vote';
import { ArrowButton } from './subcomponents/arrow-button';
import { VoteDirection } from '@/types/vote-direction';
import { addVoteAction } from '@/actions/add-vote';
import { deleteVoteAction } from '@/actions/delete-vote';
import { optimisticUpdateId } from '@/constants/optimistic-update-id';
import { voteDirectionScore } from '@/constants/vote-direction-score';

export type ImageVoteProps = {
  imageId: string;
  vote?: Vote;
};

export const ImageVote: FC<ImageVoteProps> = ({
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
        await deleteVoteAction(vote.userVote.id);
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
        const newVoteId = await addVoteAction(imageId, direction);

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
        direction="up"
        active={optimisticVote?.userVote?.direction === 'up'}
        onClick={handleSubmit('up')}
      />

      <div className={styles.score}>{optimisticVote?.score ?? 0}</div>

      <ArrowButton
        icon={faArrowDown}
        direction="down"
        active={optimisticVote?.userVote?.direction === 'down'}
        onClick={handleSubmit('down')}
      />
    </form>
  );
};
