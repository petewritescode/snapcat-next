import { addImage } from '@/api/add-image';
import { addImageAction } from './add-image';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

jest.mock('@/api/add-image');
jest.mock('next/cache');
jest.mock('next/navigation');

const mockAddImage = jest.mocked(addImage);
const mockRevalidateTag = jest.mocked(revalidateTag);
const mockRedirect = jest.mocked(redirect);

describe('addImageAction', () => {
  it('returns an error message if the form field is not a file', async () => {
    const formData = new FormData();
    formData.append('image', 'lorem');

    const result = await addImageAction(undefined, formData);

    expect(mockAddImage).not.toHaveBeenCalled();
    expect(result).toBe('Image file not found');
  });

  it('returns an error message if the image cannot be added', async () => {
    mockAddImage.mockRejectedValue(undefined);
    const image = new File([], 'dog.jpg');
    const formData = new FormData();
    formData.append('image', image);

    const result = await addImageAction(undefined, formData);

    expect(mockAddImage).toHaveBeenCalledTimes(1);
    expect(mockAddImage).toHaveBeenCalledWith(image);
    expect(result).toBe(
      "Your file couldn't be saved, please make sure it's an image of a cat",
    );
  });

  it('adds the image, revalidates the cache and redirects on success', async () => {
    mockAddImage.mockResolvedValue(undefined);
    const image = new File([], 'cat.jpg');
    const formData = new FormData();
    formData.append('image', image);

    const result = await addImageAction(undefined, formData);

    expect(mockAddImage).toHaveBeenCalledTimes(1);
    expect(mockAddImage).toHaveBeenCalledWith(image);
    expect(result).toBe(undefined);
    expect(mockRevalidateTag).toHaveBeenCalledTimes(1);
    expect(mockRevalidateTag).toHaveBeenCalledWith('images');
    expect(mockRedirect).toHaveBeenCalledTimes(1);
    expect(mockRedirect).toHaveBeenCalledWith('/');
  });
});
