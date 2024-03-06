import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
  it('renders an accessible loader', () => {
    render(<Loader />);

    expect(
      screen.getByRole('progressbar', { name: 'Loading' }),
    ).toBeInTheDocument();
  });
});
