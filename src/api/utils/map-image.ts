import { ApiImage } from '@/types/api-image';
import { Image } from '@/types/image';

// NOTE While this appears to just map objects 1:1, it serves the purpose of
// stripping off additional properties from the API response.
export const mapImage = ({ id, url }: ApiImage): Image => ({ id, url });
