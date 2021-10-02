import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const ButtonIcon = styled.button`
  position: absolute;
  width: 3%;
  height: 100%;
  right: 0;
  top: 0;
  border: none;
  /* border-radius: 50%; */
  background-color: ${color.main[500]};
  color: white;
  font-size: 40px;
  cursor: pointer;
  opacity: 0.4;
  transition: width 0.2s;

  &:hover {
    opacity: 0.9;
    width: 5%;
  }

  svg {
    pointer-events: none;
  }
`;