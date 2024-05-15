'use client';

import { createStyles } from 'antd-style';
import { memo } from 'react';

createStyles(({ css, token }) => {
  return {
    icon: css`
      svg {
        fill: ${token.colorTextDescription};
      }

      &:hover {
        svg {
          fill: ${token.colorText};
        }
      }
    `,
  };
});

const Follow = memo(() => {
  return (
    <>
    </>
  );
});

Follow.displayName = 'Follow';

export default Follow;
