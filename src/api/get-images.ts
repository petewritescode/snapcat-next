import { ApiImage } from '@/types/api-image';
import { Image } from '@/types/image';
import { makeRequest } from './utils/make-request';
import { mapImage } from './utils/map-image';

export const getImages = async (): Promise<Image[]> => {
  const apiImages = await makeRequest<ApiImage[]>(
    'images?limit=100&order=DESC',
    { cacheTags: ['images'] },
  );

  return apiImages.map(mapImage);
};
