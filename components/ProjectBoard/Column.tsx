import React from 'react'
import { useDrop } from 'react-dnd';
import { ColumnContainer } from './style';

interface Props {
  children?: React.ReactNode;
  title?: string; 
}
const Column = ({ children, title}: Props) => { 
  const [, drop] = useDrop({
    accept: "Box",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  });

  return (
    <ColumnContainer ref={drop}>
      {title}
      {children}
    </ColumnContainer>
  );
}

export default Column