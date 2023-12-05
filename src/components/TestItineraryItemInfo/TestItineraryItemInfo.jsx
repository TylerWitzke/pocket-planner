import React from "react";
import ItineraryItemInfo from "../ItineraryItemInfo/ItineraryItemInfo";
import calaway_pic from "../assets/calaway_attraction.jpg";

const ItineraryItemInfoTest = () => {
  return (
    <ItineraryItemInfo
      name="Calaway Park"
      location="Calaway Park - 245033 Range Rd 33"
      contact="(403)-123-4567"
      date="Sunday, October 15th, 2023"
      time="9:30am"
      durationHr="3"
      durationMin="45"
      image={calaway_pic}
      onEdit={() => console.log("Edit Item")}
      onDelete={() => console.log("Delete Item")}
      onBackToMenue={() => console.log("Back to Menu")}
    />
  );
};

export default ItineraryItemInfoTest;
