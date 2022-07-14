import React from "react";
import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./components/calendar/Calendar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
