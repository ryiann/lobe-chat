'use client';

import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import {Center, Flexbox, FlexboxProps} from 'react-layout-kit';

const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    height: 20px;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      flex={'none'}
      gap={4}
      horizontal
      style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
      <span>Powered by</span>
      <Link className={styles.logoLink} href={'https://chat.funtui.com'} target={'_blank'}>
        <Center style={{ fontSize: '13px', fontWeight: 'bold' }}>
          {'FunChat'}
        </Center>
      </Link>
    </Flexbox>
  );
});

export default BrandWatermark;
