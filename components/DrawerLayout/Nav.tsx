import React from 'react';
import NavItem from './NavItem';
import { NavContainer } from './style';

const MENU_LISTS = [
  {
    type: "대시보드",
    url: "/dashboard/ssi02014"
  },
  {
    type: "투두보드",
    url: "/todoBoard/ssi02014"
  },
  {
    type: "캘린더",
    url: "/calendar/ssi02014"
  },
];

const DrawerLayoutNav = () => {
  return (
    <NavContainer>
      {MENU_LISTS && MENU_LISTS.map((el, idx) => {
        return ( 
          <NavItem item={el} key={idx} /> 
        )
      })}
    </NavContainer>
  );
};

export default DrawerLayoutNav;