import { getUserId } from '@/utils/get-user-id';
import { makeRequest } from './utils/make-request';
import { addImage } from './add-image';

jest.mock('@/utils/get-user-id', () => ({
  getUserId: jest.fn(),
}));

const mockgetUserId = jest.mocked(getUserId);

jest.mock('./utils/make-request', () => ({
  makeRequest: jest.fn(),
}));

const mockMakeRequest = jest.mocked(makeRequest);

describe('addImage', () => {
  it('calls the correct API endpoint', async () => {
    mockgetUserId.mockReturnValue('a1b2c3d4');
    mockMakeRequest.mockReturnValue(Promise.resolve());
    const image = new File([], 'image.jpg');
    const body = new FormData();
    body.append('sub_id', 'a1b2c3d4');
    body.append('file', image);

    await addImage(image);

    expect(mockMakeRequest).toHaveBeenCalledWith('images/upload', {
      method: 'POST',
      body,
    });
  });
});
