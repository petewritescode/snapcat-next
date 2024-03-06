import { render, screen } from '@testing-library/react';
import { Message } from './message';

describe('Message', () => {
  it('renders a standard message', () => {
    render(<Message>Lorem ipsum</Message>);

    expect(screen.getByText('Lorem ipsum')).not.toHaveClass('error');
  });

  it('renders an error message', () => {
    render(<Message error>Lorem ipsum</Message>);

    expect(screen.getByText('Lorem ipsum')).toHaveClass('error');
  });
});
