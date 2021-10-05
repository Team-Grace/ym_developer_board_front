import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  top: 20px;
  left: 20px;
  z-index: 10;
  padding: 3px;
`;


export const NavButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${color.main[500]};
  color: #fff;
  font-size: 24px;
  margin-right: 20px;
  box-shadow: 0 0 3px ${color.main[500]};
  cursor: pointer;

  &.active {
    background-color: #fff;
    color: ${color.main[500]};
  }

  &.in-active {
    background-color: ${color.main[500]};
    color: #fff;
  }

  &.menu1 {
    position: relative;
    animation: fadeInSlideUp .4s ease;
    animation-fill-mode: forwards;

    &:hover::after {
      content: "투두보드";
      position: absolute;
      bottom: -30px;
      left: 0;
      background-color:  ${color.main[500]};
      color: #fff;
      font-size: 12px;
      border-radius: 4px;
      padding: 3px;
      width: 50px;
    }
  }
  &.menu2{
    position: relative;
    animation: fadeInSlideUp .4s ease-in;
    animation-fill-mode: forwards;
    &:hover::after {
      content: "캘린더";
      position: absolute;
      bottom: -30px;
      left: 0;
      background-color:  ${color.main[500]};
      color: #fff;
      font-size: 12px;
      border-radius: 4px;
      padding: 3px;
      width: 50px;
    }
  }
  &:hover {
    background-color: #fff;
    color: ${color.main[500]};
  }
  

  svg {
    pointer-events: none;
  }
`;