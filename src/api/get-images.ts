import { ApiImage } from '@/types/api-image';
import { makeRequest } from './utils/make-request';
import { Image } from '@/types/image';
import { mapApiImageToImage } from './utils/map-api-image-to-image';

export const getImages = async (): Promise<Image[]> => {
  const apiImages = await makeRequest<ApiImage[]>('images?limit=100');

  return apiImages.map(mapApiImageToImage);
};
