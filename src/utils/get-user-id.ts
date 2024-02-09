import { cookieNames } from '@/constants/cookie-names';
import { cookies } from 'next/headers';

export const getUserId = () => {
  const userId = cookies().get(cookieNames.userId)?.value;

  if (!userId) {
    throw new Error('User ID not found');
  }

  return userId;
};
