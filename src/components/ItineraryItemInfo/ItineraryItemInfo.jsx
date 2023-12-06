// ItineraryItemInfo.jsx
import React from "react";
import GeneralButton from "../GeneralButton/GeneralButton"; // Import the GeneralButton component
import ItineraryItem from "../ItineraryItem/ItineraryItem";
import "./ItineraryItemInfo.css"; // Import CSS file
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { attraction_items_info } from "../../Constants";
import { event_items_info } from "../../Constants";
import { amenitie_items_info } from "../../Constants";
import { amenitie_items } from "../../Constants";
import { attraction_items } from "../../Constants";

const ItineraryItemInfo = ({
  onEditDetails,
  onDeleteItem,
  onBackToMainMenu,
}) => {

const navigate = useNavigate();
const location = useLocation();
const queryParams = new URLSearchParams(location.search);

const item_id = queryParams.get("itemid");
const item_type = queryParams.get("itemtype");

const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  timeZone: 'UTC', // Set to 'UTC' to omit time zone information
});

const redirectBack = () => {
  navigate(-1);
};

const redirectMain = () => {
  navigate("/main");
};

const onEditDetailsFromItinerary = () => {
  if(item_type == "amenity"){
    navigate("/additem?itemid=" +item_id+ "&page=amenities")
  }
  else if(item_type == "attraction"){
    navigate("/additem?itemid=" +item_id+ "&page=attraction")
  }
}

let is_event;
let item_to_display;
if(item_type == "event"){
  item_to_display = event_items_info[parseInt(item_id, 10)]
  is_event = true;
}
if(item_type == "amenity"){
  item_to_display = amenitie_items_info[parseInt(item_id, 10)]
  is_event = false;
  item_to_display.date = formatter.format(amenitie_items[parseInt(item_id, 10)].date);
}
if(item_type == "attraction"){
  item_to_display = attraction_items_info[parseInt(item_id, 10)]
  is_event = false;
  item_to_display.date = formatter.format(attraction_items[parseInt(item_id, 10)].date);
}

const deleteItem = () => {
  onDeleteItem(item_id, item_type);
  redirectBack();
}

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>

      <div className="itinerary-item-info-container">
        <ItineraryItem {...item_to_display} />

        {/* Include GeneralButton components */}
        {!is_event && <GeneralButton
          label="Edit this Item"
          onClick={onEditDetailsFromItinerary}
          paddingBottom="5px"
          paddingTop="5px"
        />}
        <GeneralButton
          label="Delete this item"
          onClick={deleteItem}
          paddingBottom="5px"
          paddingTop="5px"
        />
        <GeneralButton
          label="Back to Main Menu"
          onClick={redirectMain}
          paddingBottom="5px"
          paddingTop="5px"
        />
      </div>
    </div>
  );
};

export default ItineraryItemInfo;
