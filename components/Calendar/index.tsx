import React, { useMemo, useState } from "react";
import { 
  CalendarContainer, 
  ContentContainer, 
  DateContainer, 
  DateItem,
  DayOfWeekContainer,
  ControlContainer,
  ControlButtonContainer,
} from './style'
import moment from 'moment';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Calendar = () => {
  const [getMoment, setGetMoment] = useState(moment());
  const firstWeek = getMoment.clone().startOf('month').week();
  const lastWeek = getMoment.clone().endOf('month').week() === 1 ? 53 : getMoment.clone().endOf('month').week();
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const DateItems = useMemo(() => {
    let result:React.ReactNode[] = [];
    
    for (let i = firstWeek; i <= lastWeek; i++) {
      const element = (
        <ContentContainer key={i}>
          {Array(7).fill(0).map((data, index) => {
            let days = getMoment.clone().startOf('year').week(i).startOf('week').add(index, 'day');

            if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
              return (
                <DateItem key={index} className="today" >
                  {days.format('D')}
                </DateItem>
              );
            } else if (days.format('MM') !== getMoment.format('MM')) {
              return (
                <DateItem key={index} className="prev-dates" >
                  {days.format('D')}
                </DateItem>
              );
            }
            return(
              <DateItem key={index} className="current-dates">
                {days.format('D')}
              </DateItem>
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
          <button onClick={()=>{ setGetMoment(getMoment.clone().subtract(1, 'month')) }}>
            <MdKeyboardArrowUp />
          </button>
          <button onClick={()=>{ setGetMoment(getMoment.clone().add(1, 'month')) }}>
            <MdKeyboardArrowDown />
          </button>
        </ControlButtonContainer>
      </ControlContainer>
      <DayOfWeekContainer>
        {dayOfWeek.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
      </DayOfWeekContainer>
      <DateContainer>
        {DateItems}
      </DateContainer>
    </CalendarContainer>
  )
};

export default Calendar;