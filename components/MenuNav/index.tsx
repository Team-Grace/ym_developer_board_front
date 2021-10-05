import React, { useMemo, useState } from 'react';
import { FiMenu, FiClipboard, FiCalendar } from "react-icons/fi";
import { NavContainer, NavButton } from './style';

const MenuNav = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <NavContainer>
      <NavButton 
        className={isShowNav ? "active" : "in-active"} 
        onClick={() => setIsShowNav(!isShowNav)}
      >
        <FiMenu />
      </NavButton>
      {isShowNav && (
        <>
          <NavButton className="menu1">
            <FiClipboard />
          </NavButton>
          <NavButton className="menu2">
            <FiCalendar />
          </NavButton>
        </>
      )}
    </NavContainer>
  );
};

export default MenuNav;