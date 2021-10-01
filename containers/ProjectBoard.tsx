
import React, {useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';

const ProjectBoard = () => {
  const [isFirstColumn, setIsFirstColumn] = useState(true);

  const Item = <MovableItem setIsFirstColumn={setIsFirstColumn} />

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Column title="Todo">
          {isFirstColumn && Item}
        </Column>
        <Column title="In Progress">
          {!isFirstColumn && Item}
        </Column>
        <Column title="In Progress">
          {null}
        </Column>
      </DndProvider>
    </>
  );
};

export default ProjectBoard;