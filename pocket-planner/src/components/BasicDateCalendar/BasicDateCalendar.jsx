import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import "./BasicDateCalendar.css";

export default function BasicDateCalendar() {
  const temp = (e) => {
    console.log(e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="landscape" onChange={temp} di />
    </LocalizationProvider>
  );
}
