import { memo, useEffect } from 'react';

import { NEW_BRANDING_NAME } from '@/const/branding';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · ${NEW_BRANDING_NAME}` : NEW_BRANDING_NAME;
  }, [title]);

  return null;
});

export default PageTitle;
