import { screen } from '@testing-library/react';
import { AppLayout } from './app-layout';
import { renderAsync } from '@/test-utils/render-async';

jest.mock('@/utils/get-user-id');
jest.mock('next/navigation');

describe('AppLayout', () => {
  it('renders the header, content and footer', async () => {
    await renderAsync(AppLayout, { children: 'Lorem ipsum' });

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
