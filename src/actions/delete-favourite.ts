'use server';

import { deleteFavourite as deleteFavouriteApi } from '@/api/delete-favourite';

export const deleteFavourite = async (id: number) => deleteFavouriteApi(id);
