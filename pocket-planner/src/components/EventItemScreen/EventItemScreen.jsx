import React from "react";
import GeneralButton from "../GeneralButton/GeneralButton";
import "./EventItemScreen.css";
import calgaryflamescanucks from "../assets/calgaryflamescanucks.png";
import EventItem from "../EventItem/EventItem";
import { useNavigate } from "react-router";
import { event_items_info } from "../../Constants";
import { useLocation } from "react-router-dom";

import AttractionItem from "../AttractionItem/AttractionItem";

const EventItemScreen = ({ onAddToItinerary }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const index = queryParams.get("eventid");
  const redirectBack = () => {
    navigate(-1);
  };

  const redirectToConfirmation = () => {
    navigate("/eventconfirmation?eventid=" + index);
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="event-item-screen">
        <EventItem {...event_items_info[parseInt(index, 10)]} />
        <GeneralButton
          label="Add To Itinerary"
          onClick={redirectToConfirmation}
          paddingBottom="10px"
          paddingTop="10px"
        />
      </div>
    </div>
  );
};

export default EventItemScreen;
