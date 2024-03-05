import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { getUserId } from '@/utils/get-user-id';
import { ignoreMarkupMatcher } from '@/jest/utils/ignore-markup-matcher';

jest.mock('@/utils/get-user-id', () => ({
  getUserId: jest.fn(),
}));

const mockGetUserId = jest.mocked(getUserId);

describe('Footer', () => {
  it('renders the user ID and credit byline', () => {
    mockGetUserId.mockReturnValue('abc123');
    render(<Footer />);

    expect(
      screen.getByText(
        ignoreMarkupMatcher('User ID: abc123 — Built by Pete Williams'),
      ),
    ).toBeInTheDocument();
  });

  it('renders a link to GitHub', () => {
    render(<Footer />);

    const link = screen.getByRole('link', { name: 'Pete Williams' });
    expect(link).toHaveAttribute('href', 'https://github.com/petewritescode');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
