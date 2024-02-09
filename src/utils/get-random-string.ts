const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

export const getRandomString = (length: number): string =>
  Array.from({ length })
    .map(() => characters.charAt(Math.random() * characters.length))
    .join('');
