import React from "react";
import "./ItineraryWidget.css";
import Browse from "../Browse/Browse";
import { useNavigate } from "react-router";

const ItineraryWidget = ({ onClick, items }) => {
  return (
    <div className="outer-container-itinerary" onClick={onclick}>
      <h1>Itinerary</h1>
      <Browse items={items} height={"400px"} onClick={onClick}/>
    </div>
  );
};

export default ItineraryWidget;
