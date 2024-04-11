'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const Footer = memo(() => {
  const theme = useTheme();

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} 仅供学习交流使用，请勿用于任何商业用途。
      </span>
    </Flexbox>
  );
});

export default Footer;
