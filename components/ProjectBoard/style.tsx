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
  border-radius: 4px;
  background-color: #fff;
  min-height: 100px;
  width: 90%;
  margin: 0px auto;
  margin-top: 20px;
  box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
  cursor: pointer;
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

export const ItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-container {
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${color.gray[200]};

    h5 {
      margin-left: 10px;
      font-size: 16px;
    }

    button {
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-right: 10px;
      border: none;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        color: ${color.main[300]}
      }
      & svg {
        pointer-events: none;
      }
    }
  }

  .desc-container {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`;
