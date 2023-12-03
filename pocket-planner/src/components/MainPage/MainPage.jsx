import React from "react";
import "./MainPage.css";
import ItineraryWidget from "../ItineraryWidget/ItineraryWidget";
import GeneralButton from "../GeneralButton/GeneralButton";
import { useNavigate } from "react-router";
import { useState } from "react";

const MainPage = ({ items }) => {
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate("/");
  };

  const redirectToAttractions = () => {
    navigate("/attractions");
  };

  const redirectToEvents = () => {
    navigate("/events");
  };

  const redirectToAmenities = () => {
    navigate("/amenities");
  };

  const redirectToItinerary = () => {
    navigate("/itinerary");
  };

  const [myArray, setMyArray] = useState([]);

  const appendElement = () => {
    setMyArray((prevArray) => [...prevArray, "new element"]);
  };

  return (
    <div>
      <a href="#" onClick={redirectBack} className="back-link">
        Back
      </a>
      <div className="main-page-container">
        <GeneralButton
          className="general-button-style"
          label="Events"
          onClick={redirectToEvents}
          paddingBottom="10px"
          paddingTop="10px"
          height="40px"
          width="375px"
          border="15px"
        />
        <GeneralButton
          className="general-button-style"
          label="Amenities"
          onClick={redirectToAmenities}
          paddingBottom="10px"
          paddingTop="10px"
          height="40px"
          width="375px"
          border="15px"
        />
        <GeneralButton
          className="general-button-style"
          label="Attractions"
          onClick={redirectToAttractions}
          paddingBottom="10px"
          paddingTop="10px"
          height="40px"
          width="375px"
          border="15px"
        />

        {/* For testing: <Browse/> */}
        <ItineraryWidget onClick={redirectToItinerary} items={items} />
      </div>
    </div>
  );
};

export default MainPage;
