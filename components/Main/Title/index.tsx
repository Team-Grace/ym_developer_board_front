import React from 'react';
import {Title} from './style';

interface Props {
  children: React.ReactNode
}
const MainTitle = ({children}:Props) => {
  return (
    <Title>
      YMDB
    </Title>
  );
};

export default MainTitle;