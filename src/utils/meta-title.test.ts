import { metaTitle } from './meta-title';

describe('metaTitle', () => {
  it('returns just the site name when a page title is not specified', () => {
    expect(metaTitle()).toBe('Snapcat');
    expect(metaTitle('')).toBe('Snapcat');
  });

  it('returns the page title with pipe-separated site name', () => {
    expect(metaTitle('Test')).toBe('Test | Snapcat');
  });
});
