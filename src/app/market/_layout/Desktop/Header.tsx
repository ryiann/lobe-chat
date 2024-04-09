import { ChatHeader } from '@lobehub/ui';
import Link from 'next/link';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          <Center style={{ color: 'black', fontSize: '23px', fontWeight: 'bold' }}>
            {'Discover'}
          </Center>
        </Link>
      }
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
