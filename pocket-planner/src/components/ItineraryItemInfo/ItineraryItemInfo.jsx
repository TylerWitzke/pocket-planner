// ItineraryItemInfo.jsx
import React from "react";
import GeneralButton from "../GeneralButton/GeneralButton"; // Import the GeneralButton component
import ItineraryItem from "../ItineraryItem/ItineraryItem";
import "./ItineraryItemInfo.css"; // Import CSS file
import calaway_attraction from "../assets/calaway_attraction.jpg";

const ItineraryItemInfo = ({
  onEditDetails,
  onDeleteItem,
  onBackToMainMenu,
}) => {
  const itineraryDetails = {
    title: "Calaway Park",
    location: "Calaway Park - 245033 Range Rd 33",
    contact: "(403) 240-3822",
    dateTime: "Sunday, October 15th 9:30am",
    duration: "3 hours 45 minutes",
    picture: calaway_attraction,
  };

  return (
    <div>
      <a
        href="#"
        onClick={() => {
          console.log("Go back");
        }}
      >
        Back
      </a>
      <div className="itinerary-item-info-container">
        <ItineraryItem {...itineraryDetails} />

        {/* Include GeneralButton components */}
        <GeneralButton
          label="Edit this Item"
          onClick={onEditDetails}
          paddingBottom="5px"
          paddingTop="5px"
        />
        <GeneralButton
          label="Delete this item"
          onClick={onDeleteItem}
          paddingBottom="5px"
          paddingTop="5px"
        />
        <GeneralButton
          label="Back to Main Menu"
          onClick={onBackToMainMenu}
          paddingBottom="5px"
          paddingTop="5px"
        />
      </div>
    </div>
  );
};

export default ItineraryItemInfo;
