'use server';

import { addFavourite as addFavouriteApi } from '@/api/add-favourite';

export const addFavourite = async (imageId: string) => addFavouriteApi(imageId);
