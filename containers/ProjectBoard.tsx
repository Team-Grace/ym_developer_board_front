
import React, {useCallback, useMemo, useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';
import _ from 'lodash';

interface CurrentItem {
  index: number;
  name: string;
  type: string;
}

interface itemProps {
  id: number;
  name: string;
  column: string;
}

enum COLUMN_NAMES {
  DO_IT = 'DO it',
  IN_PROGRESS = 'In Porgress',
  DONE = 'DONE'
} 
const ProjectBoard = () => {
  const [example, setExample] = useState<any>({
    Todo: [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'},
      {id: 8, name: 'Item 8'},
    ],
    InProgress: [
      {id: 3, name: 'Item 3'},
      {id: 4, name: 'Item 4'},
    ],
    Done: [
      {id: 5, name: 'Item 5'},
      {id: 6, name: 'Item 6'},
      {id: 7, name: 'Item 7'},
      {id: 9, name: 'Item 9'},
      {id: 10, name: 'Item 10'},
      {id: 11, name: 'Item 11'},
    ]
  });

  const tasks = [
    {id: 1, name: 'Item 1', column: COLUMN_NAMES.DO_IT},
    {id: 2, name: 'Item 2', column: COLUMN_NAMES.DO_IT},
    {id: 3, name: 'Item 3', column: COLUMN_NAMES.DO_IT}
  ]

  const moveCardHandler = useCallback((item:any, columnName:any, dragIndex:any, hoverIndex:any) => {
    const coppiedObject = _.cloneDeep(example);
    const dragItem = coppiedObject[columnName][dragIndex];
    const selectCoppiedObject = coppiedObject[columnName];

    if (dragItem) {
      const prevItem = selectCoppiedObject.splice(hoverIndex, 1, dragItem);
      selectCoppiedObject.splice(dragIndex, 1, prevItem[0]);

      setExample({
        ...example,
        [columnName]: selectCoppiedObject
      });
    }
  }, [example]);

  const changeItemColumn = useCallback((currentItem: CurrentItem, prevColumnName: string, columnName: string) => {
    const coppiedObject = _.cloneDeep(example);
    const selectCoppiedObject = example[prevColumnName];

    if (prevColumnName !== columnName) {
      const deleteSelectList = selectCoppiedObject.filter((el:any) => el.name !== currentItem.name);
      const selectList = selectCoppiedObject.filter((el:any) => el.name === currentItem.name)[0];

      coppiedObject[columnName] = [...coppiedObject[columnName], selectList]
      coppiedObject[prevColumnName] = [...deleteSelectList];
    };

    setExample(coppiedObject);
  }, [example]);

  const returnItemsForColumn = useCallback((columnName: string) => {
    if(example[columnName]) {
      return (
        example[columnName].map((item:itemProps, index:number) => (
            <MovableItem 
              key={item.id} 
              name={item.name} 
              index={index}
              changeItemColumn={changeItemColumn}
              moveCardHandler={moveCardHandler}
              columnName={columnName}
            />
          ))
      );
    }
  }, [example]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Column title="Todo">
          {returnItemsForColumn('Todo')}
        </Column>
        <Column title="InProgress">
          {returnItemsForColumn('InProgress')}
        </Column>
        <Column title="Done">
          {returnItemsForColumn('Done')}
        </Column>
      </DndProvider>
    </>
  );
};

export default ProjectBoard;