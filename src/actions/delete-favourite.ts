'use server';

import { deleteFavourite } from '@/api/delete-favourite';

export const deleteFavouriteAction = async (id: number) => deleteFavourite(id);
