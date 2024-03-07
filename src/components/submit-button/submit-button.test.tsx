import { render, screen } from '@testing-library/react';
import {
  FormStatusNotPending,
  FormStatusPending,
  useFormStatus,
} from 'react-dom';
import { SubmitButton } from './submit-button';
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

describe('SubmitButton', () => {
  it('renders a submit button', () => {
    mockUseFormStatus.mockReturnValue(formStatusNotPending);

    render(<SubmitButton>Lorem ipsum</SubmitButton>);

    expect(screen.getByRole('button', { name: 'Lorem ipsum' })).toHaveAttribute(
      'type',
      'submit',
    );
  });

  it('adds an ARIA label where specified', () => {
    mockUseFormStatus.mockReturnValue(formStatusNotPending);

    render(<SubmitButton label="Dolor sit">Lorem ipsum</SubmitButton>);

    expect(
      screen.queryByRole('button', { name: 'Lorem ipsum' }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Dolor sit' }),
    ).toBeInTheDocument();
  });

  it('disables itself during form submission', () => {
    mockUseFormStatus.mockReturnValue(formStatusPending);

    render(<SubmitButton>Lorem ipsum</SubmitButton>);

    expect(
      screen.queryByRole('button', { name: 'Lorem ipsum' }),
    ).toBeDisabled();
  });

  // TODO Can't yet be tested because it relies on React/ReactDOM canary
  // features and Jest only has access to the stable version specified in
  // package.json
  it.todo('fires the callback on submission');
});
