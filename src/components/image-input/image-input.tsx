'use client';

import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FC } from 'react';
import styles from './image-input.module.scss';
import { useFormStatus } from 'react-dom';

export const ImageInput: FC = () => {
  const { pending } = useFormStatus();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.form?.requestSubmit();
    event.target.form?.reset();
  };

  return (
    <>
      <input
        className={styles.input}
        type="file"
        id="upload"
        name="image"
        disabled={pending}
        onChange={handleChange}
      />

      <label className={styles.label} htmlFor="upload">
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faCloudUploadAlt} />
        </div>

        <div className={styles.copy}>
          {pending ? 'Uploading...' : 'Click here to upload an image'}
        </div>
      </label>
    </>
  );
};
