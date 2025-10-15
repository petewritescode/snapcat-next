'use client';

import { FC, useActionState } from 'react';
import { addImageAction } from '@/actions/add-image';
import { ImageInput } from '../image-input/image-input';
import { Message } from '../message/message';
import styles from './upload-form.module.scss';

export const UploadForm: FC = () => {
  const [error, formAction] = useActionState(addImageAction, undefined);

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
