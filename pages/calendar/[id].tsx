import React, { useState } from 'react';
import Calendar from 'components/Calendar';
import PageTitle from 'components/PageTitle';
import moment from 'moment';

const projectBoard = () => {
  const [getMoment, setGetMoment] = useState(moment());
  const firstWeek = getMoment.clone().startOf('month').week();
  const lastWeek = getMoment.clone().endOf('month').week() === 1 ? 53 : getMoment.clone().endOf('month').week();

  const schedule = [
    {
      date: "20211008",
      value: "달력시작1",
    },
    {
      date: "20211009",
      value: "달력시작3",
    },
  ];
  return (
    <>
      <PageTitle title="Calendar" />
      <Calendar 
        getMoment={getMoment} 
        firstWeek={firstWeek} 
        lastWeek={lastWeek}
        schedule={schedule}
        setAddMoment={() => setGetMoment(getMoment.clone().subtract(1, 'month'))}
        setSubMoment={() => setGetMoment(getMoment.clone().add(1, 'month'))}
      />
    </>
  );
};

export default projectBoard;