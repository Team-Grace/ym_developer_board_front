import React from 'react';
import ProjectBoard from 'components/ProjectBoard';
import PageTitle from 'components/PageTitle';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { InnerContainer } from 'styles/common';

const projectBoard = () => {
  return (
    <>
      <PageTitle title="ToDo Board" />
      <DndProvider backend={HTML5Backend}>
        <InnerContainer>
          <ProjectBoard />
        </InnerContainer>
      </DndProvider>
    </>
  );
};

export default projectBoard;