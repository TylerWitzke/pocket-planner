import React, { useState } from "react";
import "./AddItem.css";
import Dropdown from "../Dropdown/Dropdown";
import GeneralButton from "../GeneralButton/GeneralButton";
import { useNavigate } from "react-router";
import { attraction_items, amenitie_items } from "../../Constants";
import { useLocation } from "react-router-dom";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [...Array.from({ length: 31 }, (_, i) => i + 1)];

const currentYear = new Date().getFullYear();
const years = [
  ...Array.from({ length: 10 }, (_, i) => currentYear + i),
];

const hours = [...Array.from({ length: 24 }, (_, i) => i)];
const minutes = [...Array.from({ length: 60 }, (_, i) => i)];

const durationhours = [...Array.from({ length: 24 }, (_, i) => i)];
const durationminutes = [...Array.from({ length: 60 }, (_, i) => i)];

export let dateInfo = {
  month: -1,
  day: -1,
  year: -1,
  hour: "",
  minute: "",
};

export let durationInfo = {
  hour: "",
  minute: "",
};

const AddItem = ({ title, image }) => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHours] = useState("");
  const [minute, setMinutes] = useState("");

  const [durationhour, setDurationHours] = useState("");
  const [durationminute, setDurationMinutes] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get("itemid");
  const page = queryParams.get("page");
  const items = page == "attraction" ? attraction_items : amenitie_items;
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };

  const onSubmit = () => {
    dateInfo.day = parseInt(day, 10);
    dateInfo.month = months.indexOf(month) - 1;
    dateInfo.year = parseInt(year, 10);
    dateInfo.hour = hour;
    dateInfo.minute = minute;

    durationInfo.hour = durationhour
    durationInfo.minute= durationminute

    console.log(dateInfo.month);
    navigate("/attractionconfirmation?itemid=" + index + "&page=" + page);
  };

  return (
    <div className="AddItem-page-style">
      <a href="#" onClick={redirectBack} className="back-link">
        Back
      </a>
      <div>
        <h1 className="AddItem-title-style" style={{ textAlign: "center" }}>
          Add {items[parseInt(index, 10)].title}
        </h1>
        <img
          src={items[parseInt(index, 10)].picture}
          alt={items[parseInt(index, 10)].title}
          className="AddItem-image-style"
        />
      </div>

      <p className="p-top-margin">
        When do you want get to {items[parseInt(index, 10)].title}?
      </p>

      <div className="dropdown-group">
        <Dropdown title="Month" list={months} updateState={setMonth} />
        <Dropdown title="Day" list={days} updateState={setDay} />
        <Dropdown title="Year" list={years} updateState={setYear} />
      </div>

      <div className="dropdown-group">
        <Dropdown title="Hours" list={hours} updateState={setHours} />
        <Dropdown title="Minutes" list={minutes} updateState={setMinutes} />
      </div>

      <p>How long will you be at {items[parseInt(index, 10)].title}?</p>

      <div className="dropdown-group">
        <Dropdown title="Hours" list={durationhours} updateState={setDurationHours} />
        <Dropdown title="Minutes" list={durationminutes} updateState={setDurationMinutes} />
      </div>

      <GeneralButton
        label="Add Item"
        onClick={onSubmit}
        paddingTop="50px"
        width="350px"
        height="55px"
        border="10px"
      />
    </div>
  );
};

export default AddItem;
