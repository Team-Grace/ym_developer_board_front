import React from 'react';
import { MainContainer, MainTitle, MainContent } from './style';


const Main = () => {
  return (
    <MainContainer>
      <MainTitle>YMDB</MainTitle>
      <MainContent>
        <span>YMDB</span> 는 개발자들을 위한 웹 개발자 보드입니다. <br />
        현재 베타 테스트 버전이며, <span>YMDB</span> 는 모바일을 지원하지 않는 웹 전용 서비스입니다.  <br />
        아직 부족하지만 지속적으로 기능 개선을 하도록 하겠습니다. <br />
        감사합니다<br />
      </MainContent>
    </MainContainer>
  )
};

export default Main;