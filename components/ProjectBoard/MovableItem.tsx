import React, { useMemo, useRef, useState } from "react";
import { COLUMN_NAMES } from 'utils/Item';
import { useDrag, useDrop } from 'react-dnd';
import { MovableContainter, ItemContentContainer } from './style';
import { CurrentItem, DropResult } from 'types/projectBoard/projectBoard';
import { FiDelete } from "react-icons/fi";

interface Props {
  title: string;
  desc: string;
  id: number;
  index: number;
  columnName: string;
  changeItemColumn: (
    currentItem: CurrentItem, 
    prevColumnName: string, 
    columnName: string
  ) => void;
  moveCardHandler: (
    currentItem: CurrentItem, 
    columnName: string, 
    dragIndex: number, 
    hoverIndex: number
  ) => void;
  onRemove: (id:number, columnName:string) => void;
}

const MovableItem = ({ 
  title,
  desc,
  id, 
  index, 
  columnName, 
  changeItemColumn, 
  moveCardHandler,
  onRemove,
}: Props) => {
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
    item: { index, id, type: 'Box' },
    end: (item, monitor) => {
      const dropResult: null | DropResult = monitor.getDropResult();
      if (dropResult) {
        const { name } = dropResult;
        const { TODO, IN_PROGRESS, DONE } = COLUMN_NAMES;

        switch(name) {
          case TODO:
            changeItemColumn(item, columnName, TODO);
            break;
          case IN_PROGRESS:
            changeItemColumn(item, columnName, IN_PROGRESS);
            break;
          case DONE:
            changeItemColumn(item, columnName, DONE);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
        isDragging: monitor.isDragging(),
    }),
  });

  const opacity = useMemo(() => {
    return isDragging ? 0.6 : 1
  }, [isDragging]);

  drag(drop(ref));

  return (
    <MovableContainter ref={ref} style={{opacity}}>
      <ItemContentContainer>
        <div className="title-container">
          <h5>{title}</h5>
          <button onClick={() => onRemove(id, columnName)}><FiDelete /></button>
        </div>
        <div className="desc-container">
          {desc}
        </div>
      </ItemContentContainer>
    </MovableContainter>
  );
};

export default MovableItem;