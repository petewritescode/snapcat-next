import { render, screen } from '@testing-library/react';
import { ignoreMarkupMatcher } from './ignore-markup-matcher';

describe('ignoreMarkupMatcher', () => {
  it('returns true if the element text matches', () => {
    render(<div data-testid="element">Lorem ipsum</div>);

    expect(
      ignoreMarkupMatcher('Lorem ipsum')(
        'UNUSED',
        screen.getByTestId('element'),
      ),
    ).toBe(true);
  });

  it('returns true if the element text matches, ignoring markup', () => {
    render(
      <div data-testid="element">
        Lorem <span>ipsum</span>
      </div>,
    );

    expect(
      ignoreMarkupMatcher('Lorem ipsum')(
        'UNUSED',
        screen.getByTestId('element'),
      ),
    ).toBe(true);
  });

  it('returns false on parent elements', () => {
    render(
      <div data-testid="element">
        <div>
          Lorem <span>ipsum</span>
        </div>
      </div>,
    );

    expect(
      ignoreMarkupMatcher('Lorem ipsum')(
        'UNUSED',
        screen.getByTestId('element'),
      ),
    ).toBe(false);
  });

  it('returns false when there is no element', () => {
    expect(ignoreMarkupMatcher('Lorem ipsum')('UNUSED', null)).toBe(false);
  });
});
