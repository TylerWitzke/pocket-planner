// AttractionConfirmationScreen.jsx

import React from "react";
import GeneralButton from "../GeneralButton/GeneralButton"; // Import the GeneralButton component
import "./AttractionConfirmationScreen.css"; // Import the CSS file
import ItemSuccess from "../ItemSuccess/ItemSuccess"; // Import the Item component
import blue_ring_attraction from "../assets/blue_ring_attraction.jpg";
import Item from "../Item/Item"; // Import the Item component
import { attraction_items, amenitie_items } from "../../Constants";
import { dateInfo } from "../AddItem/AddItem";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const AttractionConfirmationScreen = ({
  onEditDetails,
  onDeleteItem,
  onBackToMainMenu,
  updateListFunction,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get("itemid");
  const page = queryParams.get("page");
  const items = page == "attraction" ? attraction_items : amenitie_items;
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };

  const redirectMain = () => {
    navigate("/main");
  };

  const updateList = () => {
    items[parseInt(index, 10)].date = new Date(
      dateInfo.year,
      dateInfo.month,
      dateInfo.day
    );
    updateListFunction(items[parseInt(index, 10)]);
    redirectMain();
  };

  const createMessage = () => {
    const total_hours = parseInt(dateInfo.hour.slice(0, -2));
    const total_minutes = parseInt(dateInfo.minute.slice(0, -3));
    let ret_val = "";
    if (total_hours > 0) {
      if (total_hours === 1) {
        ret_val = "1 hour";
      } else {
        ret_val = total_hours + " hours";
      }
    }
    if (total_minutes > 0) {
      if (total_minutes === 1) {
        if (ret_val === "") {
          ret_val = "1 minute";
        } else {
          ret_val = ret_val + " and 1 minute";
        }
      } else {
        if (ret_val === "") {
          ret_val = total_minutes + " minutes";
        } else {
          ret_val = ret_val + " and" +total_minutes +"minutes";
        }
      }
    }
    return ret_val;
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="attraction-confirmation-screen-container">
        <Item {...items[parseInt(index, 10)]} />
        <div className="item-success-container-style">
          <div className="item-success-text-content-style">
            <h2 className="item-success-title-style">
              Success! You have added {items[parseInt(index, 10)].title} to your
              itinerary on {months[parseInt(dateInfo.month)]} {dateInfo.day} for{" "}
              {createMessage()}
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

export default AttractionConfirmationScreen;
