import { render, screen } from '@testing-library/react';
import { ImageCard } from './image-card';
import { Image } from '@/types/image';

const image: Image = {
  id: 'a1b2c3',
  url: 'https://lorem.com/ipsum.jpg',
};

describe('ImageCard', () => {
  it('renders the image', () => {
    render(<ImageCard image={image} />);

    const img = screen.getByRole('img');

    expect(
      img
        .getAttribute('src')
        ?.includes(encodeURIComponent('https://lorem.com/ipsum.jpg')),
    ).toBe(true);

    expect(img).toHaveAttribute('alt', 'Cat image');
  });

  it('renders the favourite component', () => {
    render(<ImageCard image={image} />);

    expect(
      screen.getByRole('button', { name: 'Add favourite' }),
    ).toBeInTheDocument();
  });

  it('renders the vote component', () => {
    render(<ImageCard image={image} />);

    expect(
      screen.getByRole('button', { name: 'Add up vote' }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('vote-score')).toHaveTextContent('0');

    expect(
      screen.getByRole('button', { name: 'Add down vote' }),
    ).toBeInTheDocument();
  });
});
