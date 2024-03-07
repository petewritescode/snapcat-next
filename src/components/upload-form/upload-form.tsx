'use client';

import { FC } from 'react';
import { addImageAction } from '@/actions/add-image';
import { ImageInput } from '../image-input/image-input';
import { Message } from '../message/message';
import styles from './upload-form.module.scss';
import { useFormState } from 'react-dom';

export const UploadForm: FC = () => {
  const [error, formAction] = useFormState(addImageAction, undefined);

  return (
    <>
      {error && (
        <div className={styles.error}>
          <Message error>{error}</Message>
        </div>
      )}

      <form action={formAction} aria-label="Upload image">
        <ImageInput />
      </form>
    </>
  );
};
