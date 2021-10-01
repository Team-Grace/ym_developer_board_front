import styled from 'styled-components';

export const ColumnContainer = styled.div`
  height: 400px;
  width: 200px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #afafaf;
  overflow-y: scroll;
`;

export const MovableContainter = styled.div`
  border-radius: 10px;
  background-color: #fff3f3;
  height: 80px;
  width: 170px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
`  

export const ColumnTitleContainer = styled.div`
  text-align: center;
  h5 {
    padding: 10px 0;
    font-size: 18px;
  }
`;
