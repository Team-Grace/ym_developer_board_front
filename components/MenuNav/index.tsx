import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { NavContainer, NavButton } from './style';
import NavItem from './NavItem';



const MenuNav = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const MENU_LISTS = [
    {
      type: "user",
      url: "/ssi02014"
    },
    {
      type: "projectBoard",
      url: "/projectBoard/ssi02014"
    },
    {
      type: "calendar",
      url: "/calendar/ssi02014"
    },
  ];

  return (
    <NavContainer>
      <NavButton 
        className={isShowNav ? "active" : "in-active"} 
        onClick={() => setIsShowNav(!isShowNav)}
      >
        <FiMenu />
      </NavButton>

      {MENU_LISTS.map((item, idx) => (
        <>
          <NavItem
            key={idx}
            type={item.type}
            url={item.url}
            isShowNav={isShowNav}
            onClick={() => setIsShowNav(false)}
          />
        </>
      ))}
    </NavContainer>
  );
};

export default MenuNav;