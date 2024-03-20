export const metaTitle = (pageTitle?: string) =>
  [pageTitle, 'Snapcat']
    .filter((part) => part !== undefined && Boolean(part.length))
    .join(' | ');
