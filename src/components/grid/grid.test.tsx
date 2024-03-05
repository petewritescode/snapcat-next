import { render, screen, within } from '@testing-library/react';
import { Grid } from './grid';

describe('Grid', () => {
  it('renders its children in a list', () => {
    render(<Grid>Lorem ipsum</Grid>);

    const list = screen.getByRole('list');
    expect(within(list).getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
