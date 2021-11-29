import React from 'react';
import { Wrapper, Title, StaticText, DynamicText, MainDescription } from './style';

const MainTitle = () => {
  return (
    <Wrapper>
      <Title>
        <StaticText>YM.</StaticText> 
        <DynamicText>
          <span>DEVELOPER BOARD<i>&#128187;</i></span>
        </DynamicText>
        <br/>
      </Title>
      <MainDescription>
        {/* Copyright &copy; */}
      </MainDescription>
    </Wrapper>
  );
};

export default MainTitle;