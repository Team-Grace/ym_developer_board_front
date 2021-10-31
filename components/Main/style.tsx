import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${color.main[500]};
`;

export const MainTitle = styled.h5`
  margin: 0 0 20px 0;
  font-family: 'Luckiest Guy', cursive;
  font-size: 50px;
  color: #fff;
`;

export const MainContent = styled.p`
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 4px #a5a5a5;
  border-radius: 6px;
  width: 450px;
  font-size: 12px;

  span {
    font-family: 'Luckiest Guy', cursive;
    color: ${color.main[500]};
    font-size: 18px;
  }
`;