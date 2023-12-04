import React from "react";

import "./BrowseAmenities.css"; // Import the CSS file
import SearchBar from "../SearchBar/SearchBar";
import Browse from "../Browse/Browse";
import { useNavigate } from "react-router";
import RadioButton from "../RadioButton/RadioButton";
import { amenitie_items } from "../../Constants";

const BrowseAmenities = () => {
  const navigate = useNavigate();
  const redirectBack = () => {
    navigate(-1);
  };

  const routeToAmenitiesScreen = (id) => {
    navigate("/amenitieitemscreen?amenitiesid=" + id);
  };

  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="browse-amenities-container">
        <h1>Amenities</h1>

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
          placeholder="Search for amenities..."
          onSearch={handleSearch}
        />
        <Browse
          items={amenitie_items}
          height={"550px"}
          onClick={routeToAmenitiesScreen}
        />
      </div>
    </div>
  );
};

export default BrowseAmenities;
