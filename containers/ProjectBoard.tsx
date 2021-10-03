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
import InsertButton from 'components/InsertButton';
import UploadMenu from 'components/ProjectBoard/UploadMenu';

const { TODO, IN_PROGRESS, DONE} = COLUMN_NAMES;

const ProjectBoard = () => {
  const [isOpenUploadMenu, setIsOpenUploadMenu] = useState(false);
  const [tasks, setTasks] = useState<any>({
    [TODO]: [
      {id: 1, title: '예제 타이틀', desc: '예제 설명입니다.'},
    ],
    [IN_PROGRESS]: [],
    [DONE]: []
  });
  const [formValues, setFormValues] = useState({
    id: 1,
    title: "",
    desc: "",
  });

  const idRef = useRef(1);

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

  const onChange = useCallback((e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value.replaceAll("<br>", "\r\n")
    });
  }, [formValues]);
  
  const onUpload = useCallback((e) => {
    e.preventDefault();

    idRef.current += 1;

    const temp = { ...formValues };
    temp.id = idRef.current;

    if (onValidate()) {
      setTasks({
        ...tasks,
        [TODO]: [...tasks[TODO], temp]
      });
      onReset();
    } 
  }, [formValues]);

  const onRemove = (id: number, columnName: string) => {
    setTasks({
      ...tasks,
      [columnName]: tasks[columnName].filter((el: CurrentItem) => el.id !== id)
    })
  }

  const onReset = useCallback(() => {
    setFormValues({
      ...formValues,
      title: "",
      desc: "",
    })
    setIsOpenUploadMenu(false);
  }, []);

  const onValidate = useCallback(() => {
    const { title, desc } = formValues;
    if (!title.length) {
      alert("타이틀을 작성해주세요");
      return false;
    } else if (!desc.length) {
      alert("설명을 작성해주세요");
      return false;
    }
    return true;
  }, [formValues]);

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

          <InsertButton onClick={() => setIsOpenUploadMenu(true)} />
          <UploadMenu 
            formValues={formValues}
            isOpenUploadMenu={isOpenUploadMenu} 
            onCancel={() => setIsOpenUploadMenu(false)}
            onChange={onChange}
            onUpload={onUpload}
          />
        </InnerContainer>
      </DndProvider>
    </>
  );
};

export default React.memo(ProjectBoard);