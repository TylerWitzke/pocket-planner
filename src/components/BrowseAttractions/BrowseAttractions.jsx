import React, { useState } from "react";

import "./BrowseAttractions.css"; // Import the CSS file
import SearchBar from "../SearchBar/SearchBar";
import Browse from "../Browse/Browse";
import { useNavigate } from "react-router";
import { attraction_items } from "../../Constants";
import RadioButton from "../RadioButton/RadioButton";

const BrowseAttractions = () => {
  const [itemArray, setItemArray] = useState(attraction_items);
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

  const [radioButtonValue, setRadioButtonValue] = useState('All');
  const [searchValue, setSearchValue] = useState('')

  const updateSearch = (value, key) => {
    if (key ==='radio') {
      const matchingEvents = (value === 'All' ? attraction_items : attraction_items.filter(item => item.type.includes(value)));
      const matchingText = matchingEvents.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      setItemArray(matchingText);
      setRadioButtonValue(value);
    }
    else {
      console.log(value)
      const matchingEvents = (radioButtonValue === 'All' ? attraction_items : attraction_items.filter(item => item.type.includes(radioButtonValue)));
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
      <div className="browse-attraction-container">
        <h1>Attractions</h1>
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
          placeholder="Search for attractions..."
          onSearch={handleSearch}
          onChange={updateSearch}
        />
        <Browse
          items={itemArray}
          height={"550px"}
          onClick={routeToAttractionScreen}
        />
      </div>
    </div>
  );
};

export default BrowseAttractions;
