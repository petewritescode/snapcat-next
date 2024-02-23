import { UploadForm } from '@/components/upload-form/upload-form';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Add image',
};

const UploadPage: NextPage = () => <UploadForm />;

export default UploadPage;
