import { render, screen } from '@testing-library/react';
import { UploadForm } from './upload-form';
import { useActionState } from 'react';

jest.mock('react', () => {
  const original = jest.requireActual('react');
  return {
    ...original,
    useActionState: jest.fn(),
  };
});

jest.mock('@/actions/add-image', () => ({
  addImageAction: jest.fn(),
}));

const mockUseActionState = jest.mocked(useActionState);

describe('UploadForm', () => {
  it('renders a form with an image input', () => {
    mockUseActionState.mockReturnValueOnce([undefined, jest.fn(), false]);
    render(<UploadForm />);

    expect(
      screen.getByRole('form', { name: 'Upload image' }),
    ).toBeInTheDocument();

    const imageInput = screen.getByLabelText('Click here to upload an image');
    expect(imageInput).toHaveAttribute('type', 'file');
    expect(imageInput).not.toHaveAttribute('aria-invalid');
    expect(imageInput).not.toHaveAttribute('aria-errormessage');
  });

  it('displays the error message returned from useActionState', () => {
    mockUseActionState.mockReturnValueOnce(['ERROR MESSAGE', jest.fn(), false]);
    render(<UploadForm />);

    expect(
      screen.getByLabelText('Click here to upload an image'),
    ).toHaveAccessibleErrorMessage('ERROR MESSAGE');
  });

  // Can't test without a running Next.js server - consider moving to Cypress
  it.todo('calls the form action on submission');
});
