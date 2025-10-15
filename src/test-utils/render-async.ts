import { render } from '@testing-library/react';
import { FC } from 'react';

// `render` does not support async components. This utility function awaits the
// result before rendering to the screen
export const renderAsync = async <T>(
  component: FC<T>,
  props: T,
): Promise<void> => {
  const result = await component(props);

  render(result);
};
