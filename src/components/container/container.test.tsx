import { render, screen } from '@testing-library/react';
import { Container } from './container';

describe('Container', () => {
  it('renders its children', () => {
    render(<Container>Lorem ipsum</Container>);

    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
  });

  it('renders a full-height container', () => {
    render(<Container>Lorem ipsum</Container>);

    expect(screen.getByText('Lorem ipsum')).not.toHaveClass('shallow');
  });

  it('renders a shallow container', () => {
    render(<Container shallow>Lorem ipsum</Container>);

    expect(screen.getByText('Lorem ipsum')).toHaveClass('shallow');
  });
});
