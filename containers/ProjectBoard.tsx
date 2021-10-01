import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ProjectBoard = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Column title="Todo">
          <MovableItem />
        </Column>
        <Column title="In Progress">
          {null}
        </Column>
        <Column title="In Progress">
          {null}
        </Column>
      </DndProvider>
    </>
  );
};

export default ProjectBoard;