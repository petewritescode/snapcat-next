import { metaTitle } from './meta-title';

describe('metaTitle', () => {
  it('suffixes the page title with the site name', () => {
    expect(metaTitle('Test')).toBe('Test | Snapcat');
  });

  it('handles empty page titles', () => {
    expect(metaTitle('')).toBe('Snapcat');
  });
});
