// BrowseItinerary.jsx

import React, { useState } from "react";
import GeneralButton from "../GeneralButton/GeneralButton"; // Import the GeneralButton component
import Item from "../Item/Item"; // Import the Item component
import Browse from "../Browse/Browse"; // Import the Browse component
import "./BrowseItinerary.css"; // Import the CSS file
import calgary_stampeders from "../assets/calgary_stampeders.png";
import calaway_attraction from "../assets/calaway_attraction.jpg";
import ex_machina from "../assets/ex_machina.jpg";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router";


const BrowseItinerary = ({ items }) => {
  const [itemArray, setItemArray] = useState(items);
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };

  const redirectToCalendar = () => {
    navigate("/c");
  };

  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };

  const itemClick = (id, item_type) => {
    console.log(`Clicked on item_type: ${item_type}, id: ${id}`);
    navigate("/itineraryItem?itemid=" +id+ "&itemtype=" +item_type);
  };

  const updateSearch = (value, key) => {
    const matchingText = items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    setItemArray(matchingText);
  }

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="browse-itinerary-container">
        {/* Header */}
        <h2 className="itinerary-header">Itinerary</h2>

        {/* Search Bar */}
        <SearchBar placeholder="Search itinerary..." onSearch={handleSearch} onChange={updateSearch}/>

        {/* Up Next subheading */}
        <h3 className="itinerary-subheading">Up Next:</h3>
        {itemArray.length > 0 && <Item {...itemArray[0] } onClick={itemClick}/>}

        {/* Later subheading */}
        <h3 className="itinerary-subheading">Later:</h3>
        <Browse items={itemArray.slice(1)} height={"300px"} onClick={itemClick}/>

        {/* Button to view in calendar */}
        <GeneralButton
          label="View in Calendar"
          onClick={redirectToCalendar}
          paddingBottom="10px"
          paddingTop="10px"
        />
      </div>
    </div>
  );
};

export default BrowseItinerary;
