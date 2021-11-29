import React from 'react';
import { Wrapper, VersionContainer, ContentContainer } from './style';
import Link from 'next/link';
import { FaArrowCircleRight } from "react-icons/fa";

const MainLeftBox = () => {
  return (
    <Wrapper>
      <VersionContainer>
        <h2>2021.11.30</h2> 
        <p>version 1.0</p>
      </VersionContainer>
      <ContentContainer>
        <p>
          YMDB는 현재 프로토타입 버전입니다. <br /><br />
          서버는 구현이 안된 상태이고 기본적인 프론트엔드 기능만 구현되어 있습니다. <br /><br />
          또한, 반응형을 구현하지 않은 데스크탑에서만 호환되는 웹페이지입니다. <br /><br />
          이점을 참고해서 이용해주시면 감사드립니다. <br /><br />
          <span>&#128591;</span>
        </p>
      </ContentContainer>
      <Link href="/dashboard/ssi02014">
        <a><FaArrowCircleRight></FaArrowCircleRight></a>
      </Link>
    </Wrapper>
  );
};

export default MainLeftBox;