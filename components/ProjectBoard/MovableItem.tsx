import React, { Dispatch, SetStateAction, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { MovableContainter } from './style';

interface Props {
  name: string;
  index: number;
  columnName: string;
  changeItemColumn: (currentItem: any, prevColumnName:any, columnName: any) => void;
  moveCardHandler: (item:any, columnName:any, dragIndex:any, hoverIndex:any) => void;
}

interface DropResult {
  dropEffect: string;
  name: string;
}

const MovableItem = ({ name, index, columnName, changeItemColumn, moveCardHandler }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: 'Box',
    hover(item:any, monitor:any) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (!ref.current) return;
      if (dragIndex === hoverIndex) return;
      
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      const direction = (dragIndex < hoverIndex)? "down" : "up";

      if (direction === "down" && hoverClientY < hoverMiddleY) {
        return;
      }
      if (direction === "up" && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCardHandler(item, columnName, dragIndex, hoverIndex);
      item.index = hoverIndex;
  },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'Box',
    item: {index, name, type: 'Box' },
    end: (item, monitor) => {
      const dropResult: null | DropResult = monitor.getDropResult();

      if (dropResult) {
        if(dropResult.name === 'Todo') {
          changeItemColumn(item, columnName, 'Todo');
        } else if(dropResult.name === 'InProgress') {
          changeItemColumn(item, columnName, 'InProgress');
        } else if(dropResult.name === 'Done') {
          changeItemColumn(item, columnName, 'Done');
        }
      }
    },
    collect: (monitor) => ({
        isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref))
  return (
    <MovableContainter ref={ref} style={{opacity}}>
      {name}
    </MovableContainter>
  );
};

export default MovableItem;