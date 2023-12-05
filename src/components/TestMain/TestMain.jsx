// Only using this for testing

import React from "react";
import MainPage from "../MainPage/MainPage";
import calaway_attraction from "../assets/calaway_attraction.jpg";
import stampeders_logo from "../assets/stampeders_logo.png";
import ex_machina from "../assets/ex_machina.jpg";

const TestMain = () => {
  const itemInfoStampeders = {
    onClick: () => {
      console.log("Navigate to Stampeders item info");
    },
    title: "Calgary Stampeders",
    info1: "Saturday, October 14th 7:30pm",
    info2: "McMahon Stadium",
    info3: "1817 Crowchild Trail NW",
    picture: stampeders_logo,
    borderCol: "1px solid black",
  };

  const itemInfoCalaway = {
    onClick: () => {
      console.log("Navigate to Calaway Park item info");
    },
    title: "Calaway Park",
    info1: "Sunday, October 15th 9:30am",
    info2: "Calaway Park",
    info3: "245033 Range Rd 33",
    picture: calaway_attraction,
    borderCol: "1px solid black",
  };

  const itemInfoExMachina = {
    onClick: () => {
      console.log("Navigate to Ex Machina item info");
    },
    title: "Ex Machina",
    info1: "Sunday, October 15th 4:00pm",
    info2: "Scotiabank Theatre Chinook",
    info3: "6455 Macleod Trail SW",
    picture: ex_machina,
    borderCol: "1px solid black",
  };

  const items = [itemInfoStampeders, itemInfoCalaway, itemInfoExMachina];

  return <MainPage items={items} />;
};

export default TestMain;
