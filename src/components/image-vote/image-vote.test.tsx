import { render, screen } from '@testing-library/react';
import { ImageVote } from './image-vote';

describe('ImageVote', () => {
  it('renders upvote and downvote buttons with current score', () => {
    render(<ImageVote imageId="a1b2c3" vote={{ score: 5 }} />);

    expect(
      screen.getByRole('button', { name: 'Add up vote' }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('vote-score')).toHaveTextContent('5');

    expect(
      screen.getByRole('button', { name: 'Add down vote' }),
    ).toBeInTheDocument();
  });

  it('renders a remove upvote button when the user has upvoted', () => {
    render(
      <ImageVote
        imageId="a1b2c3"
        vote={{ score: 5, userVote: { id: 123, direction: 'up' } }}
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Remove up vote' }),
    ).toBeInTheDocument();
  });

  it('renders a remove downvote button when the user has downvoted', () => {
    render(
      <ImageVote
        imageId="a1b2c3"
        vote={{ score: 5, userVote: { id: 123, direction: 'down' } }}
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Remove down vote' }),
    ).toBeInTheDocument();
  });

  // Can't test without a running Next.js server - consider moving to Cypress
  it.todo('calls the server function on click');
});
