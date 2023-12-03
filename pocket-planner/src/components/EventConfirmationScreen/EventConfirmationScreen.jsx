// EventConfirmationScreen.jsx

import React from "react";
import GeneralButton from "../GeneralButton/GeneralButton"; // Import the GeneralButton component
import "./EventConfirmationScreen.css"; // Import the CSS file
import ItemSuccess from "../ItemSuccess/ItemSuccess"; // Import the Item component
import calgary_flames from "../assets/calgary_flames.png";
import Item from "../Item/Item"; // Import the Item component
import { event_items } from "../../Constants";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const EventConfirmationScreen = ({
  onEditDetails,
  onDeleteItem,
  onBackToMainMenu,
  updateListFunction,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get("eventid");
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };

  const redirectMain = () => {
    navigate("/main");
  };

  const updateList = () => {
    updateListFunction(event_items[parseInt(index, 10)]);
    redirectMain();
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="event-confirmation-screen-container">
        <Item {...event_items[parseInt(index, 10)]} />
        <div className="item-success-container-style">
          <div className="item-success-text-content-style">
            <h2 className="item-success-title-style">
              Success! You have added {event_items[parseInt(index, 10)].title}{" "}
              to your itinerary for {event_items[parseInt(index, 10)].info2} at{" "}
              {event_items[parseInt(index, 10)].info3}.
            </h2>
          </div>
        </div>
        {/* Include GeneralButton components */}
        <GeneralButton
          label="Edit details"
          onClick={redirectBack}
          paddingBottom="10px"
          paddingTop="10px"
        />
        <GeneralButton
          label="Delete this item"
          onClick={redirectMain}
          paddingBottom="10px"
          paddingTop="10px"
        />
        <GeneralButton
          label="Back to Main Menu"
          onClick={updateList}
          paddingBottom="10px"
          paddingTop="10px"
        />
      </div>
    </div>
  );
};

export default EventConfirmationScreen;
