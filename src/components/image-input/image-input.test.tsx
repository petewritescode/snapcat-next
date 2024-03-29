import { render, screen } from '@testing-library/react';
import { ImageInput } from './image-input';
import {
  FormStatusNotPending,
  FormStatusPending,
  useFormStatus,
} from 'react-dom';
import userEvent from '@testing-library/user-event';
import { FormEvent } from 'react';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}));

const mockUseFormStatus = jest.mocked(useFormStatus);

const formStatusPending: FormStatusPending = {
  pending: true,
  data: new FormData(),
  method: '',
  action: '',
};

const formStatusNotPending: FormStatusNotPending = {
  pending: false,
  data: null,
  method: null,
  action: null,
};

describe('ImageInput', () => {
  it('renders an image input', () => {
    mockUseFormStatus.mockReturnValue(formStatusNotPending);

    render(<ImageInput />);

    expect(
      screen.getByLabelText('Click here to upload an image'),
    ).toHaveAttribute('type', 'file');
  });

  it('renders a disabled state during submission', () => {
    mockUseFormStatus.mockReturnValue(formStatusPending);

    render(<ImageInput />);

    expect(screen.getByLabelText('Uploading...')).toBeDisabled();
  });

  it('submits and resets the parent form on change', async () => {
    mockUseFormStatus.mockReturnValue(formStatusNotPending);

    const file = new File([], 'cat.jpg');

    const handleSubmit = jest.fn().mockImplementation((event: FormEvent) => {
      event.preventDefault();
    });

    const handleReset = jest.fn();

    render(
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <ImageInput />
      </form>,
    );

    await userEvent.upload(
      screen.getByLabelText('Click here to upload an image'),
      file,
    );

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleReset).toHaveBeenCalledTimes(1);
  });
});
