import type { NextPage } from 'next'
import { Container } from 'styles/_common';
import Example from 'components/Example';
import ProjectBoard from 'containers/ProjectBoard';

const Home: NextPage = () => {
  return (
    <Container>
      <ProjectBoard />
      {/* <Example /> */}
    </Container>
  )
}

export default Home
