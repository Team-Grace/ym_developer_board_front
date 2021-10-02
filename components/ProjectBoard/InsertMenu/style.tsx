import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const MenuContainer = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  background-color: ${color.main[500]};
  transition: all .3s;
  padding: 50px 0;

  &.active {
    opacity: 1;
    width: 25%;
  }
  &.in-active {
    opacity: 0.8;
    width: 0;

    button {
      display: none;
    }
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    color: #ffffff;
    font-size: 40px;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  padding:15px;
  display: flex;
  flex-direction: column;
`;