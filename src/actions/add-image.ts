'use server';

import { addImage } from '@/api/add-image';
import { routes } from '@/constants/routes';
import { updateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export const addImageAction = async (
  _prevState: string | undefined,
  formData: FormData,
) => {
  const image = formData.get('image');

  if (!(image instanceof File)) {
    return 'Image file not found';
  }

  try {
    await addImage(image);
  } catch (error) {
    return "Your file couldn't be saved, please make sure it's an image of a cat";
  }

  updateTag('images');
  redirect(routes.home);
};
