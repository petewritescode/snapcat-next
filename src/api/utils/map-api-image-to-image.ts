import { ApiImage } from '@/types/api-image';
import { Image } from '@/types/image';

export const mapApiImageToImage = (apiImage: ApiImage): Image => ({
  id: apiImage.id,
  url: apiImage.url,
  width: apiImage.width,
  height: apiImage.height,
});
