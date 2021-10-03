import React from 'react';
import { MenuContainer, InputContainer } from './style';
import { TiDelete } from "react-icons/ti";
import { BiCheckCircle } from "react-icons/bi";
import { FormValuesProps } from 'types/projectBoard/projectBoard';


interface Props {
  isOpenUploadMenu: boolean;
  formValues: FormValuesProps;
  onCancel: () => void;
  onChange: (e: any) => void;
  onUpload: (e: any) => void;
}

const UploadMenu = ({ 
  isOpenUploadMenu,
  formValues,
  onCancel,
  onChange,
  onUpload
}: Props) => {
  return (
    <MenuContainer className={isOpenUploadMenu ? 'active' : 'in-active'}>
      <button className="menu-close-btn" onClick={onCancel}><TiDelete /></button>
      <form>
        <InputContainer className="title">
          <h5>타이틀</h5>
          <textarea
            name="title"
            value={formValues.title}
            placeholder="타이틀을 작성해주세요."
            maxLength={15}
            onChange={onChange}
          />
        </InputContainer>

        <InputContainer>
          <h5>설명</h5>
          <textarea
            name="desc"
            value={formValues.desc}
            placeholder="설명을 작성해주세요."
            onChange={onChange}
          />
        </InputContainer>

        <InputContainer>
          <h5>추가예정</h5>
          <textarea 
            placeholder="추가예정"
            readOnly
          />
        </InputContainer>

        <button className="todo-upload-btn" onClick={onUpload}>
          <BiCheckCircle />
        </button>
      </form>
    </MenuContainer>
  );
}

export default UploadMenu;