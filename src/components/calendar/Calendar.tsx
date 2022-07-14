import { Header } from "../header/Header";
import { Body } from "../body/Body";

const Calendar = () => {
  const today = new Date();

  return (
    <>
      <div className={"calendar"}>
        <Header />
        <div className={"calendar-container"}>
          <Body currentDate={today} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
