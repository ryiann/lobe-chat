import { GridShowcase } from '@lobehub/ui';
import { PropsWithChildren } from 'react';
import {Center, Flexbox} from 'react-layout-kit';

import Follow from '@/features/Follow';

const COPYRIGHT = `仅供学习交流使用，请勿用于任何商业用途。`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flexbox
      align={'center'}
      height={'100%'}
      justify={'space-between'}
      padding={16}
      style={{ overflow: 'hidden', position: 'relative' }}
      width={'100%'}
    >
      <Center style={{ alignSelf: 'flex-start', color: 'black', fontSize: '25px', fontWeight: 'bold' }}>
        {'FunChat'}
      </Center>
      <GridShowcase innerProps={{ gap: 24 }} style={{ maxWidth: 1024 }} width={'100%'}>
        {children}
      </GridShowcase>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <span style={{ opacity: 0.5 }}>{COPYRIGHT}</span>
        <Follow />
      </Flexbox>
    </Flexbox>
  );
};

export default DesktopLayout;
