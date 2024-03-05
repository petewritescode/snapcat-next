'use server';

import { addFavourite } from '@/api/add-favourite';

export const addFavouriteAction = async (imageId: string) =>
  addFavourite(imageId);
