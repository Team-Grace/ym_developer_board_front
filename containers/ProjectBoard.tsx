import FirstColumn from 'components/ProjectBoard/FirstColumn';
import SecondColumn from 'components/ProjectBoard/SecondColumn';
import ThirdColumn from 'components/ProjectBoard/ThirdColumn';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ProjectBoard = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <FirstColumn />
        <SecondColumn />
        <ThirdColumn />
      </DndProvider>
    </>
  );
};

export default ProjectBoard;