import React, { useEffect } from 'react';
import type { NextPage } from 'next'
import { Container } from 'styles/_common';
import Example from 'components/Example';
import ProjectBoard from 'containers/ProjectBoard';

const Home: NextPage = () => {
  useEffect(() => {
    if (window.innerWidth < 1024) {
      console.log(window.innerWidth);
      alert("해당 웹은 브라우저 너비가 1024px 이상에서 정상 작동합니다. 브라우저 너비를 키워주시기 바랍니다.");
    }
  }, []);
  
  return (
    <Container>
      <ProjectBoard />
      {/* <Example /> */}
    </Container>
  )
}

export default Home
