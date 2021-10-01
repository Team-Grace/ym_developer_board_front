import React from 'react';
import {useDrop } from 'react-dnd';
import { Column } from './style';

const SecondColumn = () => {
  const [{ canDrop, isOver}, drop] = useDrop({
    accept: "Box",
    drop: () => ({ name: "Some name" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  });

  console.log('options', {canDrop, isOver});

  return (
      <Column ref={drop}>
        Column 2
      </Column>
  )
}

export default SecondColumn;