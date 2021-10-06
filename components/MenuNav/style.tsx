import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 15px;
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

  &.hide {
    opacity: 1;
    transition: all .2s;
    transform: scale(0);
  }
  &.show {
    opacity: 1;
    transform: scale(1);
    transition: all .2s;

    &.user:hover::after {
      content: "메인";
      position: absolute;
      bottom: 50%;
      left: 60px;
      transform: translateY(50%);
      background-color:  ${color.main[500]};
      color: #fff;
      font-size: 14px;
      border-radius: 4px;
      padding: 3px;
      width: 60px;
    }
    &.projectBoard:hover::after {
      content: "투두보드";
      position: absolute;
      bottom: 50%;
      left: 60px;
      transform: translateY(50%);
      background-color:  ${color.main[500]};
      color: #fff;
      font-size: 14px;
      border-radius: 4px;
      padding: 3px;
      width: 60px;
    }
    &.calendar:hover::after {
      content: "캘린더";
      position: absolute;
      bottom: 50%;
      left: 60px;
      transform: translateY(50%);
      background-color:  ${color.main[500]};
      color: #fff;
      font-size: 14px;
      border-radius: 4px;
      padding: 3px;
      width: 60px;
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