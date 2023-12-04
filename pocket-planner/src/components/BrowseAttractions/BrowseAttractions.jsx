import React from "react";

import "./BrowseAttractions.css"; // Import the CSS file
import SearchBar from "../SearchBar/SearchBar";
import Browse from "../Browse/Browse";
import { useNavigate } from "react-router";
import { attraction_items } from "../../Constants";
import RadioButton from "../RadioButton/RadioButton";

const BrowseAttractions = () => {
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };

  const routeToAttractionScreen = (id) => {
    navigate("/attractionttemscreen?attractionid=" + id);
  };

  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="browse-attraction-container">
        <h1>Attractions</h1>
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
        <SearchBar
          placeholder="Search for attractions..."
          onSearch={handleSearch}
        />
        <Browse
          items={attraction_items}
          height={"550px"}
          onClick={routeToAttractionScreen}
        />
      </div>
    </div>
  );
};

export default BrowseAttractions;
