import { render, screen, within } from '@testing-library/react';
import { GridItem } from './grid-item';

describe('GridItem', () => {
  it('renders its children in a list item', () => {
    render(<GridItem>Lorem ipsum</GridItem>);

    const listItem = screen.getByRole('listitem');
    expect(within(listItem).getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
