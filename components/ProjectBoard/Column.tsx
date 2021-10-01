import React from 'react'
import { useDrop } from 'react-dnd';
import { ColumnContainer } from './style';

interface Props {
  children?: React.ReactNode;
  className?: string;
  title?: string; 
}
const Column = ({ children, className, title}: Props) => { 
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
    <ColumnContainer ref={drop}>
      {title}
      {children}
    </ColumnContainer>
  );
}

export default Column