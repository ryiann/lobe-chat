import { ChatHeader } from '@lobehub/ui';
import Link from 'next/link';
import { rgba } from 'polished';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          <Flexbox align={'center'} gap={4} horizontal>
            <Center style={{ color: 'black', fontSize: '23px', fontWeight: 'bold' }}>
              {'ChatGPT'}
            </Center>
            <Center style={{ color: rgba(0, 0, 0, 0.12), fontSize: '23px', fontStyle: 'oblique' }}>
              /&nbsp;
            </Center>
            <Center style={{ color: 'black', fontSize: '23px' }}>{'Discover'}</Center>
          </Flexbox>
        </Link>
      }
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
