'use client';

import {ChatHeader} from '@lobehub/ui';
import {rgba} from 'polished';
import {createStyles} from 'antd-style';
import {memo} from 'react';

import {Center} from "react-layout-kit";

export const useStyles = createStyles(({css, token}) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {


  return (
    <ChatHeader
      left={<><Center style={{color: 'black', fontSize: '25px', fontWeight: 'bold'}}> {'FunChat'} </Center><Center
        style={{color: rgba(0, 0, 0, 0.12), fontSize: '23px', fontStyle: 'oblique'}}>
        /&nbsp;
      </Center><Center style={{color: 'black', fontSize: '25px'}}>{'Discover'}
      </Center></>}
    />
  );
});

export default Header;
