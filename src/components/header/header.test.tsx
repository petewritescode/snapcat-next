import { render, screen, within } from '@testing-library/react';
import { Header } from './header';

jest.mock('next/navigation');

describe('Header', () => {
  it('renders the logo and navigation within a header element', () => {
    render(<Header />);

    const header = screen.getByRole('banner');

    expect(
      within(header).getByRole('link', { name: 'Snapcat' }),
    ).toBeInTheDocument();

    expect(within(header).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    );

    expect(within(header).getByRole('link', { name: 'Add' })).toHaveAttribute(
      'href',
      '/upload',
    );
  });
});
