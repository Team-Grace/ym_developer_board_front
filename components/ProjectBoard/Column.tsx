import React, { useMemo } from 'react'
import { useDrop } from 'react-dnd';
import { COLUMN_NAMES } from 'utils/Item';
import { ColumnContainer, ColumnTitleContainer } from './style';

interface Props {
  children: React.ReactNode;
  title: string;
  length: number
}

const Column = ({ children, title, length}: Props) => { 
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Box",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const getBackGroundColor = useMemo(() => {
    if (isOver) {
      return 'rgba(0, 0, 0, 0.1)';
    } 
    return '';
  }, [isOver, canDrop]);

  return (
    <ColumnContainer ref={drop} style={{ backgroundColor: getBackGroundColor }}>
      <ColumnTitleContainer>
        <p>{length}</p>
        <h5>{title}</h5>
      </ColumnTitleContainer>
      {children}
    </ColumnContainer>
  );
}

export default React.memo(Column);