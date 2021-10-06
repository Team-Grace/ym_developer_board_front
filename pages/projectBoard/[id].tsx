import React from 'react';
import ProjectBoard from 'components/ProjectBoard';
import PageTitle from 'components/PageTitle';

const projectBoard = () => {
  return (
    <>
      <PageTitle title="ToDo Board" />
      <ProjectBoard />
    </>
  );
};

export default projectBoard;