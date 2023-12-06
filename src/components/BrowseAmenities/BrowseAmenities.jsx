import React, { useState } from "react";

import "./BrowseAmenities.css"; // Import the CSS file
import SearchBar from "../SearchBar/SearchBar";
import Browse from "../Browse/Browse";
import { useNavigate } from "react-router";
import RadioButton from "../RadioButton/RadioButton";
import { amenitie_items } from "../../Constants";

const BrowseAmenities = () => {
  const [itemArray, setItemArray] = useState(amenitie_items);
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

  const [radioButtonValue, setRadioButtonValue] = useState('All');
  const [searchValue, setSearchValue] = useState('')

  const updateSearch = (value, key) => {
    if (key ==='radio') {
      const matchingEvents = (value === 'All' ? amenitie_items : amenitie_items.filter(item => item.type.includes(value)));
      const matchingText = matchingEvents.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      setItemArray(matchingText);
      setRadioButtonValue(value);
    }
    else {
      console.log(value)
      const matchingEvents = (radioButtonValue === 'All' ? amenitie_items : amenitie_items.filter(item => item.type.includes(radioButtonValue)));
      const matchingText = matchingEvents.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
      setItemArray(matchingText);
      setSearchValue(value);
    }
  }

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <div className="browse-amenities-container">
        <h1>Amenities</h1>

        <RadioButton
          options={[
            { value: "All", label: "All" },
            { value: "nearby", label: "Nearby" },
            { value: "top-rated", label: "Top Rated" },
            { value: "popular", label: "Popular" },
          ]}
          onChange={(selectedOption) => {
            updateSearch(selectedOption, 'radio');
          }}
        />
        <SearchBar
          placeholder="Search for amenities..."
          onSearch={handleSearch}
          onChange={updateSearch}
        />
        <Browse
          items={itemArray}
          height={"550px"}
          onClick={routeToAmenitiesScreen}
        />
      </div>
    </div>
  );
};

export default BrowseAmenities;
