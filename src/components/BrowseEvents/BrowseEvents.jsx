import React, { useState } from 'react';

import "./BrowseEvents.css"; // Import the CSS file
import SearchBar from "../SearchBar/SearchBar";
import Browse from "../Browse/Browse";
import { useNavigate } from "react-router";
import { event_items } from "../../Constants";
import RadioButton from "../RadioButton/RadioButton";

const BrowseEvents = () => {
  const [itemArray, setItemArray] = useState(event_items);
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

  const [radioButtonValue, setRadioButtonValue] = useState('All');
  const [searchValue, setSearchValue] = useState('')

  const updateSearch = (value, key) => {
    if (key ==='radio') {
      const matchingEvents = (value === 'All' ? event_items : event_items.filter(item => item.type.includes(value)));
      const matchingText = matchingEvents.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      setItemArray(matchingText);
      setRadioButtonValue(value);
    }
    else {
      console.log(value)
      const matchingEvents = (radioButtonValue === 'All' ? event_items : event_items.filter(item => item.type.includes(radioButtonValue)));
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
      <div className="browse-event-container">
        <h1>Events</h1>

        <RadioButton
          options={[
            { value: "All", label: "All" },
            { value: "sport", label: "Sports" },
            { value: "music", label: "Music" },
            { value: "show", label: "Shows" },
          ]}
          onChange={(selectedOption) => {
            updateSearch(selectedOption, 'radio');
          }}
        />
        <SearchBar placeholder="Search for events..." onSearch={handleSearch} onChange={updateSearch}/>
        <Browse
          items={itemArray}
          height={"550px"}
          onClick={routeToEventItemScreen}
        />
      </div>
    </div>
  );
};

export default BrowseEvents;
