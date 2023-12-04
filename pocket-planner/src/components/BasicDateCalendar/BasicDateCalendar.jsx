import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useNavigate } from "react-router";
import Browse from "../Browse/Browse";

export default function BasicDateCalendar({ items }) {
  const [itemArray, setItemArray] = useState(items);
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };
  const temp = (e) => {
    const selectedDate = new Date(
      parseInt(e["$y"], 10),
      parseInt(e["$M"], 10),
      parseInt(e["$D"], 10),
    );

    const matchingEvents = items.filter((event) => {
      const eventDate = event.date;
      console.log(eventDate.getDate());
      return (
        eventDate.getDate() === selectedDate.getDate() &&
        eventDate.getMonth() === selectedDate.getMonth() &&
        eventDate.getFullYear() === selectedDate.getFullYear()
      );
    });
    setItemArray(matchingEvents);
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={temp} />
      </LocalizationProvider>
      <Browse items={itemArray} height={"300px"} />
    </div>
  );
}
