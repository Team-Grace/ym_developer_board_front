import React, {useCallback, useMemo, useState, useRef} from 'react';
import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';
import _ from 'lodash';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { COLUMN_NAMES } from 'utils/Item';
import { CurrentItem, itemProps } from 'types/projectBoard/projectBoard';
import { InnerContainer } from 'styles/_common';

const ProjectBoard = () => {
  const { TODO, IN_PROGRESS, DONE} = COLUMN_NAMES;
  const [tasks, setTasks] = useState<any>({
    [TODO]: [
      {id: 1, title: '리액트하기', desc: '테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.테스트 desc입니다.'},
      {id: 2, title: '투두리스트만들기', desc: '안녕하세요'},
      {id: 3, title: '드래그앤드랍만들기', desc: '안녕하세요'},
    ],
    [IN_PROGRESS]: [
      {id: 4, title: '밥먹기', desc: '안녕하세요'},
      {id: 5, title: '잠자기', desc: '안녕하세요'},
    ],
    [DONE]: []
  });

  const isMobile = useMemo(() => {
    return window.innerWidth < 600;
  }, [])

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
      const deleteSelectList = selectCoppiedObject
        .filter((el:itemProps) => el.id !== currentItem.id);
      const selectList = selectCoppiedObject
        .filter((el:itemProps) => el.id === currentItem.id)[0];

      coppiedObject[columnName] = [...coppiedObject[columnName], selectList]
      coppiedObject[prevColumnName] = [...deleteSelectList];
    };

    setTasks(coppiedObject);
  }, [tasks]);

  const onRemove = (id: number, columnName: string) => {
    setTasks({
      ...tasks,
      [columnName]: tasks[columnName].filter((el: CurrentItem) => el.id !== id)
    })
  }

  const returnItemsForColumn = useCallback((columnName: string) => {
    if (tasks[columnName]) {
      return (
        tasks[columnName].map((item: itemProps, index: number) => (
          <MovableItem
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc} 
            index={index}
            columnName={columnName}
            changeItemColumn={changeItemColumn}
            moveCardHandler={moveCardHandler}
            onRemove={onRemove}
          />
        ))
      );
    }
  }, [tasks]);


  return (
    <>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <InnerContainer>
          <Column title={TODO} length={tasks[TODO].length}>
            {returnItemsForColumn(TODO)}
          </Column>
          <Column title={IN_PROGRESS} length={tasks[IN_PROGRESS].length}>
            {returnItemsForColumn(IN_PROGRESS)}
          </Column>
          <Column title={DONE} length={tasks[DONE].length}>
            {returnItemsForColumn(DONE)}
          </Column>
        </InnerContainer>
      </DndProvider>
    </>
  );
};

export default React.memo(ProjectBoard);