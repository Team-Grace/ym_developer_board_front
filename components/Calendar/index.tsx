import React, { useMemo, useState } from "react";
import { 
  CalendarContainer, 
  ContentContainer, 
  DateContainer, 
  DayOfWeekContainer,
  ControlContainer,
  ControlButtonContainer,
} from './style'
import moment from 'moment';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import DateItems from './DateItems';
import { CalendarProps } from "types/Calendar/Calendar";

const Calendar = ({
  getMoment, 
  firstWeek, 
  lastWeek, 
  schedule, 
  setAddMoment, 
  setSubMoment
}: CalendarProps) => {
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const DateOutput = useMemo(() => {
    let result:React.ReactNode[] = [];

    for (let i = firstWeek; i <= lastWeek; i++) {
      const element = (
        <ContentContainer key={i}>
          {Array(7).fill(0).map((_, index) => {
            const days = getMoment
              .clone()
              .startOf('year')
              .week(i)
              .startOf('week')
              .add(index, 'day');
            const filter_schedule = schedule
              .filter(el => el.date === days.format('YYYYMMDD'));

            if (days.format('MM') !== getMoment.format('MM')) {
              return (
                <DateItems
                  currentMonth={false}
                  key={index}
                  schedule={filter_schedule}
                  days={days}
                />
              );
            }
            return(
              <DateItems
                currentMonth={true}
                key={index}
                schedule={filter_schedule}
                days={days}
              />
            );
          })}
        </ContentContainer>
      );
      result = [...result, element];
    }
    return result;
  }, [getMoment]);

  return (
    <CalendarContainer>
      <ControlContainer>
        <span>{getMoment.format('YYYY년 MM월')}</span>
        <ControlButtonContainer>
          <button onClick={setSubMoment}>
            <MdKeyboardArrowUp />
          </button>
          <button onClick={setAddMoment}>
            <MdKeyboardArrowDown />
          </button>
        </ControlButtonContainer>
      </ControlContainer>
      <DayOfWeekContainer>
        {dayOfWeek.map((el, idx) => <p key={idx}>{el}</p>)}
      </DayOfWeekContainer>
      <DateContainer>
        {DateOutput}
      </DateContainer>
    </CalendarContainer>
  )
};

export default React.memo(Calendar);