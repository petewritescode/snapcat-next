import { cookieNames } from '@/constants/cookie-names';
import { cookies } from 'next/headers';

export const getUserId = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get(cookieNames.userId)?.value;

  if (!userId) {
    throw new Error('User ID not found');
  }

  return userId;
};
