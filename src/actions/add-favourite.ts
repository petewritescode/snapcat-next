'use server';

import { addFavourite as addFavouriteApi } from '@/api/add-favourite';

export const addFavourite = (imageId: string, userId: string) =>
  addFavouriteApi(imageId, userId);
