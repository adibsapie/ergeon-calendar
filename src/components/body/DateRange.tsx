import React from "react";
import { addDays, eachDayOfInterval, subDays } from "date-fns";
import { Details } from "./Details";

interface Props {
  date: Date;
  currentDate: Date;
  selectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const DateRange: React.FC<Props> = (props: Props) => {
  const nextThreeDays = addDays(props.date, 3);
  const prevThreeDays = subDays(props.date, 3);
  const dayArr = eachDayOfInterval({
    start: prevThreeDays,
    end: nextThreeDays,
  });

  return (
    <Details
      currentDate={props.currentDate}
      listOfDates={dayArr}
      selectedDate={props.selectedDate}
    />
  );
};
