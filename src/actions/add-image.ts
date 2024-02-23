'use server';

import { addImage as addImageApi } from '@/api/add-image';
import { routes } from '@/constants/routes';
import { redirect } from 'next/navigation';

export const addImage = async (
  _prevState: string | undefined,
  formData: FormData,
) => {
  const image = formData.get('image');

  if (!(image instanceof File)) {
    return 'Image file not found';
  }

  try {
    await addImageApi(image);
  } catch (error) {
    return "Your file couldn't be saved, please make sure it's an image of a cat";
  }

  redirect(routes.home);
};