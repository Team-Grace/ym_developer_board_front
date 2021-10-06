import React, {useCallback, useMemo, useState, useRef, useEffect} from 'react';
import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';
import UploadButton from 'components/UploadButton';
import UploadMenu from 'components/ProjectBoard/UploadMenu';
import _ from 'lodash';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { COLUMN_NAMES } from 'constant/projectBoard';
import { CurrentItem, itemProps } from 'types/projectBoard/projectBoard';
import { InnerContainer } from 'styles/common';
import { useDispatch, useSelector } from 'react-redux';
import { uploadTodo, removeTodo, orderMoveItem, changeColumnItem } from 'redux/projectBoard';
import { RootState } from 'redux/store';

const { TODO, IN_PROGRESS, DONE} = COLUMN_NAMES;

const ProjectBoard = () => {
  const tasks = useSelector((state:RootState) => state.projectBoard);
  const [isOpenUploadMenu, setIsOpenUploadMenu] = useState(false);
  const [formValues, setFormValues] = useState({
    id: 0,
    title: "",
    desc: "",
  });
  const dispatch = useDispatch();

  const moveCardHandler = useCallback((
    currentItem:CurrentItem, 
    columnName:string, 
    dragIndex: number, 
    hoverIndex: number
  ) => {
    const dragItem = _.cloneDeep(tasks[columnName][dragIndex]);
    const selectCoppiedObject = _.cloneDeep(tasks[columnName]);

    let prevSelectKey = "";

    Object.keys(tasks).forEach(key => {
      tasks[key].forEach((el: itemProps) => {
        el.id === currentItem.id && (prevSelectKey = key);
      });
    });

    if (dragItem && prevSelectKey === columnName) {
      const prevItem = selectCoppiedObject.splice(hoverIndex, 1, dragItem);
      selectCoppiedObject.splice(dragIndex, 1, prevItem[0]);

      dispatch(orderMoveItem({
        columnName,
        selectObject :selectCoppiedObject,
      }));
    }
  }, [tasks, dispatch]);

  const changeItemColumn = useCallback((
    currentItem: CurrentItem, 
    prevColumnName: string, 
    columnName: string
  ) => {
    const coppiedObject = _.cloneDeep(tasks);
    const selectCoppiedObject = coppiedObject[prevColumnName];

    if (prevColumnName !== columnName) {
      const deleteSelectList = selectCoppiedObject
        .filter((el:itemProps) => el.id !== currentItem.id);
      const selectList = selectCoppiedObject
        .filter((el:itemProps) => el.id === currentItem.id)[0];

      coppiedObject[columnName] = [...coppiedObject[columnName], selectList]
      coppiedObject[prevColumnName] = [...deleteSelectList];

      dispatch(changeColumnItem(coppiedObject));
    };
  }, [tasks, dispatch]);

  const onChange = useCallback((e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value.replaceAll("<br>", "\r\n")
    });
  }, [formValues]);
  
  const onUpload = useCallback((e) => {
    e.preventDefault();

    const temp = { ...formValues };

    const allList = Object.keys(tasks).map(key => tasks[key]).flat().map(el => el.id);
    const maxNum = allList.length > 0 ? Math.max(...allList) + 1 : 1;

    temp.id = maxNum;

    if (onValidate()) {
      onReset();
      dispatch(uploadTodo(temp));
    } 
  }, [formValues, dispatch]);

  const onRemove = useCallback((id: number, columnName: string) => {
    dispatch(removeTodo({ id, columnName }));
  }, [dispatch]);

  const onReset = useCallback(() => {
    setFormValues({
      ...formValues,
      title: "",
      desc: "",
    })
    setIsOpenUploadMenu(false);
  }, [formValues]);

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
      <DndProvider backend={HTML5Backend}>
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

          <UploadButton onClick={() => setIsOpenUploadMenu(true)} />
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