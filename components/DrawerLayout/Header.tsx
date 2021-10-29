import React from 'react';
import Link from 'next/link';
import { HeaderContainer } from './style';

const DrawerLayoutHeader = () => {
  return (
    <HeaderContainer>
      <h5>YMDB</h5>
      <Link href="/dashboard/ssi02014">
        <a>로그인</a>
      </Link>
    </HeaderContainer>
  );
};

export default DrawerLayoutHeader;