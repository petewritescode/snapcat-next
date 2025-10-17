import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { ignoreMarkupMatcher } from '@/test-utils/ignore-markup-matcher';

describe('Footer', () => {
  it('renders the user ID and credit byline', () => {
    render(<Footer userId="abc123" />);

    expect(
      screen.getByText(
        ignoreMarkupMatcher('User ID: abc123 — Built by Pete Williams'),
      ),
    ).toBeInTheDocument();
  });

  it('renders a link to GitHub', () => {
    render(<Footer userId="abc123" />);

    const link = screen.getByRole('link', { name: 'Pete Williams' });
    expect(link).toHaveAttribute('href', 'https://github.com/petewritescode');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
