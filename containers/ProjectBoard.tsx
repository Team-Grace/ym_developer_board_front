
import React, {useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';

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

const ProjectBoard = () => {
  const [example, setExample] = useState<any>({
    Todo: [
      {id: 1, name: 'Item 1', column: 'Todo'},
      {id: 2, name: 'Item 2', column: 'Todo'},
      {id: 8, name: 'Item 8', column: 'Todo'},
    ],
    InProgress: [
      {id: 3, name: 'Item 3', column: 'InProgress'},
      {id: 4, name: 'Item 4', column: 'InProgress'},
    ],
    Done: [
      {id: 5, name: 'Item 5', column: 'Done'},
      {id: 6, name: 'Item 6', column: 'Done'},
      {id: 7, name: 'Item 7', column: 'Done'},
      {id: 9, name: 'Item 9', column: 'Done'},
      {id: 10, name: 'Item 10', column: 'Done'},
      {id: 11, name: 'Item 11', column: 'Done'},
    ]
  })

  const moveCardHandler = (item:any, columnName:any, dragIndex:any, hoverIndex:any) => {
    const dragItem = example[columnName][dragIndex];
    const coppiedObject = {...example}
    const selectCoppiedObject = coppiedObject[columnName];
    const prevItem = selectCoppiedObject.splice(hoverIndex, 1, dragItem);
    selectCoppiedObject.splice(dragIndex, 1, prevItem[0]);

    setExample({
      ...example,
      coppiedObject
    })
  }

  const changeItemColumn = (currentItem: CurrentItem, prevColumnName: string, columnName: string) => {
    setExample((prev: any) => {
      const coppiedObject = {...prev};
      const selectCoppiedObject = prev[prevColumnName];

      if (prevColumnName !== columnName) {
        let selectList = selectCoppiedObject.filter((el:any) => el.name === currentItem.name)[0];
        const deleteSelectList = selectCoppiedObject.filter((el:any) => el.name !== currentItem.name);
  
        selectList = {
          ...selectList,
          column: selectList.column === columnName ? prevColumnName : columnName
        }
        coppiedObject[columnName] = [...coppiedObject[columnName], selectList]
        coppiedObject[prevColumnName] = [...deleteSelectList];
      } else {
        return prev;
      }
      return coppiedObject;
    });
  }

  const returnItemsForColumn = (columnName: string) => {
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
  }

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