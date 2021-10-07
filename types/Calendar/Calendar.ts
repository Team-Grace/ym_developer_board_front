import moment from "moment";

export interface CalendarProps {
  getMoment: moment.Moment;
  firstWeek: number;
  lastWeek: number;
  schedule: ScheduleItem[];
  setAddMoment: () => void;
  setSubMoment: () => void;
}

export interface ScheduleItem {
  date: string;
  value: string;
}