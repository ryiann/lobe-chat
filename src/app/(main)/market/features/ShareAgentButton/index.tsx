import { Skeleton } from 'antd';
import dynamic from 'next/dynamic';
import { memo } from 'react';

dynamic(() => import('./Inner'), {
  loading: () => <Skeleton paragraph={{ rows: 8 }} title={false} />,
});
const ShareAgentButton = memo(() => {
  return (
    <>
    </>
  );
});

export default ShareAgentButton;
