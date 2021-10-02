import React from 'react';
import { MenuContainer, InputContainer } from './style';
import { TiDelete } from "react-icons/ti";

interface Props {
  isOpenInsertMenu: boolean;
  onCancel: () => void;
}
const InsertMenu = ({ isOpenInsertMenu, onCancel }: Props) => {
  return (
    <MenuContainer className={isOpenInsertMenu ? 'active' : 'in-active'}>
      <button onClick={onCancel}><TiDelete /></button>
      <form>
        <InputContainer>
          <h5>타이틀</h5>
          <input type="text" />
        </InputContainer>
      </form>
    </MenuContainer>
  );
}

export default InsertMenu;