import React from "react";

import "./BrowseEvents.css"; // Import the CSS file
import SearchBar from "../SearchBar/SearchBar";
import Browse from "../Browse/Browse";
import { useNavigate } from "react-router";
import { event_items } from "../../Constants";
import RadioButton from "../RadioButton/RadioButton";

const BrowseEvents = () => {
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };

  const routeToEventItemScreen = (id) => {
    navigate("/eventitemscreen?eventid=" + id);
    //console.log('this will route soon')
  };

  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="browse-event-container">
        <h1>Events</h1>

        <RadioButton
          options={[
            { value: "option1", label: "All" },
            { value: "option2", label: "Nearby" },
            { value: "option3", label: "Top Rated" },
            { value: "option4", label: "Popular" },
          ]}
          onChange={(selectedOption) => {
            console.log("Selected option:", selectedOption);
            // Need to add logic here
          }}
        />
        <SearchBar placeholder="Search for events..." onSearch={handleSearch} />
        <Browse
          items={event_items}
          height={"550px"}
          onClick={routeToEventItemScreen}
        />
      </div>
    </div>
  );
};

export default BrowseEvents;
