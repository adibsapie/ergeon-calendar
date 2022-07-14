import React, { useState } from "react";
import { format } from "date-fns";

interface Props {
  listOfDates: Date[];
  currentDate: Date;
  selectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const Details: React.FC<Props> = (props: Props) => {
  const currDate = new Date();
  const [selectedDay, setSelectedDay] = useState(format(currDate, "d"));

  const dayList = props.listOfDates?.map((dayObj) => {
    const [day, dayNumber] = format(dayObj, "E d").split(" ");
    const [months, year] = format(dayObj, "M y").split(" ");
    const today = dayNumber === selectedDay;
    const isActiveDay =
      dayNumber === currDate.getDate().toString() &&
      months === format(currDate, "M") &&
      year === currDate.getFullYear().toString();

    return (
      <button
        key={day}
        type="button"
        className={` ${
          isActiveDay ? "calendar-active calendar-day" : "calendar-day"
        } ${today} animated-button`}
        onClick={() => {
          setSelectedDay(dayNumber);
          props.selectedDate(dayObj);
        }}
      >
        <span>{day}</span>
        <span>{dayNumber}</span>
      </button>
    );
  });

  return <div className="calendar-days">{dayList}</div>;
};
