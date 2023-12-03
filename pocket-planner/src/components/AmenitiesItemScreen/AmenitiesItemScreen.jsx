// AttractionItemScreen.jsx

import React from "react";
import AttractionItem from "../AttractionItem/AttractionItem";
import GeneralButton from "../GeneralButton/GeneralButton";
import "./AmenitiesItemScreen.css";
import { useNavigate } from "react-router";
import { amenitie_items_info } from "../../Constants";
import { useLocation } from "react-router-dom";

const AmenitiesItemScreen = ({ onAddToItinerary }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const index = queryParams.get("amenitiesid");
  const redirectBack = () => {
    navigate(-1);
  };

  const redirectToItinerary = () => {
    navigate("/additem?itemid=" + index + "&page=amenities");
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="attraction-item-screen">
        <AttractionItem {...amenitie_items_info[parseInt(index, 10)]} />
        <GeneralButton
          label="Add to Itinerary"
          onClick={redirectToItinerary}
          paddingBottom="5px"
          paddingTop="5px"
        />
      </div>
    </div>
  );
};

export default AmenitiesItemScreen;
