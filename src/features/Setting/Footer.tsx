'use client';

import { createStyles } from 'antd-style';
import { PropsWithChildren, memo } from 'react';

createStyles(
  ({ css, token }) => css`
    font-size: 12px;
    color: ${token.colorTextSecondary};
  `,
);

const Footer = memo<PropsWithChildren>(() => {
  return null;
});

export default Footer;
