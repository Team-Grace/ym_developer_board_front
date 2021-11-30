import React, { useEffect, useMemo, useState } from 'react';
import type { NextPage } from 'next'
import { MainContainer } from 'styles/common';
import MainTitle from 'components/Main/Title';
import MainServiceBox from 'components/Main/ServiceBox';
import { BsCalendar, BsCode, BsClipboard, BsPersonFill } from "react-icons/bs";
import styled from 'styled-components';
import MainLeftBox from 'components/Main/LeftBox';

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
`;

const Home: NextPage = () => {
  useEffect(() => {
    if (window.innerWidth < 1024) {
      alert("해당 웹은 브라우저 너비가 1024px 이상에서 정상 작동합니다. 브라우저 너비를 키워주시기 바랍니다.");
    }
  }, []);

  const contentList = useMemo(() => {
    return [
      {
        title: "일정관리",
        desc: "Todo Board, Calendar를 이용한 일정관리를 하실 수 있습니다.",
        icon: <BsCalendar></BsCalendar>,
        iconBgColor: "#a6c8ff",
        iconColor: "#000",
        url: "/calendar/ssi02014"
      },
      {
        title: "코드",
        desc: "Javascript Online Compiler를 통해서 코드를 실행해보실 수 있습니다.",
        icon: <BsCode></BsCode>,
        iconBgColor: "#47619e",
        iconColor: "#fff",
        url: "/dashboard/ssi02014"
      },
      {
        title: "게시판",
        desc: "게시판을 통해서 서로의 지식을 공유해보세요.",
        icon: <BsClipboard></BsClipboard>,
        iconBgColor: "#47619e",
        iconColor: "#fff",
        url: "/dashboard/ssi02014"
      },
      {
        title: "커뮤니티",
        desc: "개발자들만의 커뮤니티를 구성하세요.",
        icon: <BsPersonFill></BsPersonFill>,
        iconBgColor: "#a6c8ff",
        iconColor: "#000",
        url: "/dashboard/ssi02014"
      },
    ]
  }, []);

  return (
    <>
      <MainContainer>
        <MainTitle />
        <ContentContainer>
          <MainLeftBox />
          <MainServiceBox contentList={contentList} />
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default Home
