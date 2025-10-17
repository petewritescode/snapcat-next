import { render, screen } from '@testing-library/react';
import { ImageFavourite } from './image-favourite';

describe('ImageFavourite', () => {
  it('renders an add favourite button if the image is not favourited', () => {
    render(<ImageFavourite imageId="a1b2c3" />);

    expect(
      screen.getByRole('button', { name: 'Add favourite' }),
    ).toBeInTheDocument();
  });

  it('renders a remove favourite button if the image is favourited', () => {
    render(<ImageFavourite imageId="a1b2c3" favourite={{ id: 123 }} />);

    expect(
      screen.getByRole('button', { name: 'Remove favourite' }),
    ).toBeInTheDocument();
  });

  // Can't test without a running Next.js server - consider moving to Cypress
  it.todo('calls the server function on click');
});
