import React, { Dispatch, SetStateAction } from "react";
import { useDrag } from 'react-dnd';
import { MovableContainter } from './style';

interface Props {
  setIsFirstColumn: Dispatch<SetStateAction<boolean>>;
}

interface DropResult {
  dropEffect: string;
  name: string;
}

const MovableItem = ({ setIsFirstColumn }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'Box',
    end: (item, monitor) => {
      const dropResult: null | DropResult = monitor.getDropResult();
      if (dropResult && dropResult.name === 'Todo') {
        setIsFirstColumn(true);
      } else {
        setIsFirstColumn(false);
      }
    },
    collect: (monitor) => ({
        isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <MovableContainter ref={drag} style={{opacity}}>
      We will move this item
    </MovableContainter>
  );
};

export default MovableItem;