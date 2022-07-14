import React, { useState } from "react";
import { addWeeks, format, getDay, getWeek, subWeeks } from "date-fns";
import { DateRange } from "./DateRange";

interface Props {
  currentDate: Date;
}

export const listOfFormat = {
  "MM/dd/yyyy": "MM/dd/yyyy",
  "dd/MM/yyyy": "dd/MM/yyyy",
  "MM/dd/yy": "MM/dd/yy",
  "dd/MM/yy": "dd/MM/yy",
  "dd-MM-yyyy": "dd-MM-yyyy",
  "yyyy-MM-dd": "yyyy-MM-dd",
};

export const Body: React.FC<Props> = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState(props.currentDate);
  const [currentWk, setCurrentWk] = useState(
    getWeek(props.currentDate, {
      weekStartsOn: getDay(props.currentDate),
    })
  );
  const [currentDate, setCurrentDate] = useState(props.currentDate);
  const [dateFormat, setDateFormat] = useState(listOfFormat["MM/dd/yyyy"]);
  const prevBtn = () => {
    setCurrentWk(currentWk - 1);
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const nextBtn = () => {
    setCurrentWk(currentWk + 1);
    setCurrentDate(addWeeks(currentDate, 1));
  };

  return (
    <>
      <div className={"date-format"}>
        <div className={"date-format-title"}> {"Date Format"} </div>
        <select
          value={dateFormat}
          onChange={(e) => setDateFormat(e.target.value)}
        >
          {Object.entries(listOfFormat).map((c) => (
            <option key={c[1]} value={c[1]}>
              {c[0]}
            </option>
          ))}
        </select>
      </div>
      <div className={"date-format-title"}>
        {"Legends :  "}
        {"[ dd : Day | MM : Month | yyyy @ yy : Year ]"}
      </div>
      <div className={"calendar-head"}>
        <button type="button" className={"arrow left-arrow"} onClick={prevBtn}>
          <span>{"<<"}</span>
        </button>
        <button type="button" className={"arrow right-arrow"} onClick={nextBtn}>
          <span> {">>"} </span>
        </button>
      </div>
      <div className={"calendar-body"}>
        <DateRange
          date={currentDate}
          currentDate={currentDate}
          selectedDate={setSelectedDate}
        />
      </div>
      <div className="calendar-output">
        <b>Selected Date : {format(selectedDate, dateFormat)}</b>
      </div>
    </>
  );
};
