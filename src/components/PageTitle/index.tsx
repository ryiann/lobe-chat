import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · FunChat` : 'FunChat';
  }, [title]);

  return null;
});

export default PageTitle;
