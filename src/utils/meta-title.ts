export const metaTitle = (pageTitle: string) =>
  [pageTitle, 'Snapcat'].filter((part) => Boolean(part.length)).join(' | ');
