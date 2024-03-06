'use client';

import { Message } from '@/components/message/message';
import { NextPage } from 'next';

const ErrorPage: NextPage = () => (
  <Message error>
    Oops! Something went wrong while loading your images. Please refresh the
    page.
  </Message>
);

export default ErrorPage;
