import styled from 'styled-components';
import { color } from 'config/colorSystem';

export const CalendarContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 6px #555555;
  border-radius: 4px;
  overflow: hidden;
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2a4d85;
  width: 100%;
  height: 12%;

  span {
    margin-left: 40px;
    color: #fff;
    font-size: 24px;
  }

`;

export const ControlButtonContainer = styled.div`
  margin-right: 20px;
  display: flex;
  
  button {
    display: flex;
    background-color: transparent;
    color: #fff;
    border: none;
    outline: none;
    font-size: 45px;
    margin: 0 5px;
    cursor: pointer;

    &:hover {
      color: #85b4ff;
    }

    svg {
      pointer-events: none;
    }
  }
`;

export const DayOfWeekContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  background-color: #718db9;

  p {
    width: 14.28%;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-size: 20px;
  }
`;

export const DateContainer = styled.div`
  width: 100%;
  height: 550px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: center;
`;

export const DateItem = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
  outline: none;
  width: 14.3%;
  color: black;
  font-size: 18px;
  background-color: #fff;
  cursor: pointer;
  padding: 8px;

  &.today {}
  &.prev-dates {
    color: #b4b4b4;
  }
  &.current-dates:hover {
    background-color: #d4d4d4;
  }
`;