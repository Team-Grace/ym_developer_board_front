import React, { useMemo, useState } from "react";
import { DateItem, DateScheduleContainer, ScheduleSpan } from './style';
import moment from "moment";

interface ScheduleProps {
  date: string;
  value: string;
}
interface Props {
  schedule: ScheduleProps[];
  days: moment.Moment;
  currentMonth: boolean;
  today: boolean;
}

const DateItems = ({ schedule, days, currentMonth, today }: Props) => {
  return (
    <>
      <DateScheduleContainer>
        <DateItem
          className={currentMonth ? "current-dates" : "prev-dates"}
          value={days.format('D')}
          readOnly
        />
        {today && (
          <p className="today">Today</p>
        )}
        {schedule && schedule.map((el, idx) => {
          return <ScheduleSpan key={idx}>{el.value}</ScheduleSpan>
        })}
      </DateScheduleContainer>
    </>
  );
};

export default DateItems;