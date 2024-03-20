import { render, screen, within } from '@testing-library/react';
import { Logo } from './logo';

describe('Logo', () => {
  it('renders an accessible link with an icon', () => {
    render(<Logo />);

    const link = screen.getByRole('link', { name: 'Snapcat home' });
    expect(link).toHaveAttribute('href', '/');
    expect(within(link).getByRole('img', { hidden: true })).toHaveClass(
      'fa-cat',
    );
  });
});
