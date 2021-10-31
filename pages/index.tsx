import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Main from 'components/Main';

const Home: NextPage = () => {
  useEffect(() => {
    if (window.innerWidth < 1024) {
      console.log(window.innerWidth);
      alert("해당 웹은 브라우저 너비가 1024px 이상에서 정상 작동합니다. 브라우저 너비를 키워주시기 바랍니다.");
    }
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default Home
