'use client';

import { FC, useActionState, useId } from 'react';
import { addImageAction } from '@/actions/add-image';
import { ImageInput } from '../image-input/image-input';
import { Message } from '../message/message';
import styles from './upload-form.module.css';

export const UploadForm: FC = () => {
  const [error, formAction] = useActionState(addImageAction, undefined);
  const errorId = useId();

  return (
    <>
      {error && (
        <div className={styles.error} id={errorId}>
          <Message error>{error}</Message>
        </div>
      )}

      <form action={formAction} aria-label="Upload image">
        <ImageInput errorMessageId={error ? errorId : undefined} />
      </form>
    </>
  );
};
