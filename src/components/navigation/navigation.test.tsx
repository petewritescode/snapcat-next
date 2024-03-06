import { render, screen, within } from '@testing-library/react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Navigation } from './navigation';

jest.mock('next/navigation');

const mockUseSelectedLayoutSegment = jest.mocked(useSelectedLayoutSegment);

describe('Navigation', () => {
  it('renders navigation links within a navigation element', () => {
    render(<Navigation />);

    const nav = screen.getByRole('navigation');

    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    );

    expect(within(nav).getByRole('link', { name: 'Add' })).toHaveAttribute(
      'href',
      '/upload',
    );
  });

  it('highlights the home link by default', () => {
    render(<Navigation />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('active');
    expect(screen.getByRole('link', { name: 'Add' })).not.toHaveClass('active');
  });

  it('highlights the active segment link', () => {
    mockUseSelectedLayoutSegment.mockReturnValue('upload');

    render(<Navigation />);

    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass(
      'active',
    );
    expect(screen.getByRole('link', { name: 'Add' })).toHaveClass('active');
  });
});
