import { render, screen } from '@testing-library/react';
import { AppLayout } from './app-layout';

jest.mock('@/utils/get-user-id');
jest.mock('next/navigation');

describe('AppLayout', () => {
  it('renders the header, content and footer', () => {
    render(<AppLayout>Lorem ipsum</AppLayout>);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
