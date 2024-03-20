import { UploadForm } from '@/components/upload-form/upload-form';
import { metaTitle } from '@/utils/meta-title';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: metaTitle('Add image'),
  description: 'Upload a new cat image',
};

const UploadPage: NextPage = () => <UploadForm />;

export default UploadPage;
