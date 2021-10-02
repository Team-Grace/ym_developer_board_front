import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const ColumnContainer = styled.div`
  height: 700px;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.5);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${color.gray[50]};
  overflow-y: auto;
`;

export const MovableContainter = styled.div`
  border-radius: 10px;
  background-color: #fff;
  min-height: 100px;
  width: 90%;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
`  

export const ColumnTitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${color.main[500]};

  p {
    width: 25px;
    height: 25px;
    margin: 0 15px 0 15px;
    background-color: #fff;
    color: ${color.main[500]};
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    font-size: 14px;
    font-weight: bold;
  }

  h5 {
    padding: 15px 0;
    font-size: 24px;
    color: #fff;
  }
`;
