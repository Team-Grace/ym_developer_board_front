import React from 'react';
import { useDrag } from 'react-dnd';
import { MovableContainter } from './style';

const MovableItem = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'Box',
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