import React, {useCallback, useMemo, useState, useRef, useEffect} from 'react';
import Column from 'components/ProjectBoard/Column';
import MovableItem from 'components/ProjectBoard/MovableItem';
import _ from 'lodash';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { COLUMN_NAMES } from 'constant/projectBoard';
import { CurrentItem, itemProps } from 'types/projectBoard/projectBoard';
import { InnerContainer } from 'styles/_common';
import UploadButton from 'components/UploadButton';
import UploadMenu from 'components/ProjectBoard/UploadMenu';
import { useDispatch, useSelector } from 'react-redux';
import { uploadTodo, removeTodo, orderMoveItem, changeColumnItem } from 'redux/projectBoard';
import { RootState } from 'redux/store';

const { TODO, IN_PROGRESS, DONE} = COLUMN_NAMES;

const ProjectBoard = () => {
  const [isOpenUploadMenu, setIsOpenUploadMenu] = useState(false);
  const prjectBoard = useSelector((state:RootState) => state.projectBoard);
  const [formValues, setFormValues] = useState({
    id: 0,
    title: "",
    desc: "",
  });

  const idRef = useRef(0);
  const dispatch = useDispatch();

  const isMobile = useMemo(() => {
    return window.innerWidth < 600;
  }, [])

  const moveCardHandler = useCallback((
    currentItem:CurrentItem, 
    columnName:string, 
    dragIndex: number, 
    hoverIndex: number
  ) => {
    const dragItem = _.cloneDeep(prjectBoard[columnName][dragIndex]);
    const selectCoppiedObject = _.cloneDeep(prjectBoard[columnName]);

    let prevSelectKey = "";

    Object.keys(prjectBoard).forEach(key => {
      prjectBoard[key].forEach((el: itemProps) => {
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
  }, [prjectBoard, dispatch]);

  const changeItemColumn = useCallback((
    currentItem: CurrentItem, 
    prevColumnName: string, 
    columnName: string
  ) => {
    const coppiedObject = _.cloneDeep(prjectBoard);
    const selectCoppiedObject = coppiedObject[prevColumnName];

    if (prevColumnName !== columnName) {
      const deleteSelectList = selectCoppiedObject
        .filter((el:itemProps) => el.id !== currentItem.id);
      const selectList = selectCoppiedObject
        .filter((el:itemProps) => el.id === currentItem.id)[0];

      coppiedObject[columnName] = [...coppiedObject[columnName], selectList]
      coppiedObject[prevColumnName] = [...deleteSelectList];

      console.log(coppiedObject);

      dispatch(changeColumnItem(coppiedObject));
    };
  }, [prjectBoard, dispatch]);

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
    if (prjectBoard[columnName]) {
      return (
        prjectBoard[columnName].map((item: itemProps, index: number) => (
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
  }, [prjectBoard]);

  return (
    <>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <InnerContainer>
          <Column title={TODO} length={prjectBoard[TODO].length}>
            {returnItemsForColumn(TODO)}
          </Column>
          <Column title={IN_PROGRESS} length={prjectBoard[IN_PROGRESS].length}>
            {returnItemsForColumn(IN_PROGRESS)}
          </Column>
          <Column title={DONE} length={prjectBoard[DONE].length}>
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