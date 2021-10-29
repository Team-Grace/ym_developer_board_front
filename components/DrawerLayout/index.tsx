import React from 'react';
import Header from './Header';
import DrawerLayoutNav from './Nav';
import { RowContainer, ContentContainer } from './style';

interface Props {
  children: React.ReactNode;
}
const DrawerLayout = ({children}: Props) => {
  return (
    <>
      <Header></Header>
      <RowContainer>
        <DrawerLayoutNav />
        <ContentContainer>
          {children}
        </ContentContainer>
      </RowContainer>
    </>
  )
};

export default DrawerLayout;