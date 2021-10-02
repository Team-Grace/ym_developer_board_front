import React, {useCallback, useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';
import _ from 'lodash';
import { COLUMN_NAMES } from 'utils/Item';
import { CurrentItem, itemProps } from 'types/projectBoard/projectBoard';

const ProjectBoard = () => {
  const { TODO, IN_PROGRESS, DONE} = COLUMN_NAMES;
  const [tasks, setTasks] = useState<any>({
    [TODO]: [
      {id: 1, value: '리액트하기'},
      {id: 2, value: '투두리스트만들기'},
      {id: 8, value: '드래그앤드랍만들기'},
    ],
    [IN_PROGRESS]: [
      {id: 3, value: '밥먹기'},
      {id: 4, value: '잠자기'},
    ],
    [DONE]: []
  });

  const moveCardHandler = useCallback((
    currentItem:CurrentItem, 
    columnName:string, 
    dragIndex: number, 
    hoverIndex: number
  ) => {
    const dragItem = tasks[columnName][dragIndex];
    const selectCoppiedObject = tasks[columnName];

    let prevSelectKey = "";

    Object.keys(tasks).forEach(key => {
      tasks[key].forEach((el: itemProps) => {
        el.id === currentItem.id && (prevSelectKey = key);
      });
    });

    if (dragItem && prevSelectKey === columnName) {
      const prevItem = selectCoppiedObject.splice(hoverIndex, 1, dragItem);
      selectCoppiedObject.splice(dragIndex, 1, prevItem[0]);

      setTasks({
        ...tasks,
        [columnName]: selectCoppiedObject
      });
    }
  }, [tasks]);

  const changeItemColumn = useCallback((
    currentItem: CurrentItem, 
    prevColumnName: string, 
    columnName: string
  ) => {
    const coppiedObject = _.cloneDeep(tasks);
    const selectCoppiedObject = tasks[prevColumnName];

    if (prevColumnName !== columnName) {
      const deleteSelectList = selectCoppiedObject.filter((el:itemProps) => el.id !== currentItem.id);
      const selectList = selectCoppiedObject.filter((el:itemProps) => el.id === currentItem.id)[0];

      coppiedObject[columnName] = [...coppiedObject[columnName], selectList]
      coppiedObject[prevColumnName] = [...deleteSelectList];
    };

    setTasks(coppiedObject);
  }, [tasks]);

  const returnItemsForColumn = useCallback((columnName: string) => {
    if(tasks[columnName]) {
      return (
        tasks[columnName].map((item: itemProps, index: number) => (
          <MovableItem 
            key={item.id}
            id={item.id}
            value={item.value} 
            index={index}
            changeItemColumn={changeItemColumn}
            moveCardHandler={moveCardHandler}
            columnName={columnName}
          />
        ))
      );
    }
  }, [tasks]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Column title={TODO}>
          {returnItemsForColumn(TODO)}
        </Column>
        <Column title={IN_PROGRESS}>
          {returnItemsForColumn(IN_PROGRESS)}
        </Column>
        <Column title={DONE}>
          {returnItemsForColumn(DONE)}
        </Column>
      </DndProvider>
    </>
  );
};

export default ProjectBoard;