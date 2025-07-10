'use client';

import { ChatHeader } from '@lobehub/ui/chat';
import { rgba } from 'polished';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

import { isCustomBranding } from '@/const/version';

import CreateButton from '../../features/CreateButton';
import StoreSearchBar from '../../features/Search';

const Header = memo(() => {
  return (
    <ChatHeader
      left={
        <>
          <Center style={{ color: 'black', fontSize: '1.43rem', fontWeight: 'bold' }}>
            {' '}
            {'FunChat'}{' '}
          </Center>
          <Center style={{ color: rgba(0, 0, 0, 0.12), fontSize: '1rem', fontStyle: 'oblique' }}>
            /
          </Center>
          <Center style={{ color: 'black', fontSize: '1.43rem' }}>{'Discover'}</Center>
        </>
      }
      right={!isCustomBranding && <CreateButton />}
      style={{
        position: 'relative',
        zIndex: 10,
      }}
      styles={{
        center: { flex: 1, maxWidth: 1440 },
        left: { flex: 1, maxWidth: 240 },
        right: { flex: 1, maxWidth: 240 },
      }}
    >
      <StoreSearchBar />
    </ChatHeader>
  );
});

export default Header;
