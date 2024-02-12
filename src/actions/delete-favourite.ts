'use server';

import { deleteFavourite as deleteFavouriteApi } from '@/api/delete-favourite';

export const deleteFavourite = (id: number) => deleteFavouriteApi(id);
