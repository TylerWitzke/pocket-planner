import React from 'react'

import './BrowseEvents.css';  // Import the CSS file
import calgary_stampeders from '../assets/stampeders_logo.png'
import calaway_attraction from '../assets/calaway_attraction.jpg'
import ex_machina from '../assets/ex_machina.jpg'
import SearchBar from '../SearchBar/SearchBar';
import Browse from '../Browse/Browse';
import { useNavigate } from 'react-router'
import RadioButton from '../RadioButton/RadioButton'

const BrowseEvents = () => {

    const navigate = useNavigate();
    const redirectBack = () => {
        navigate(-1);
    };

    const routeToEventItemScreen = (val) => {
        console.log(val)
    }

    const itemInfoStampeders = {
        onClick: routeToEventItemScreen,
        title: "Calgary Stampeders",
        info1: "Saturday, October 14th 7:30pm",
        info2: "McMahon Stadium - 1817 Crowchild Trail NW",
        info3: "",
        picture: calgary_stampeders
    };

    const itemInfoCalaway = {
        onClick: () => { console.log("Navigate to Calaway Park item info"); },
        title: "Calaway Park",
        info1: "Sunday, October 15th 9:30am",
        info2: "Calaway Park - 245033 Range Rd 33",
        info3: "",
        picture: calaway_attraction
    };

    const itemInfoExMachina = {
        onClick: () => { console.log("Navigate to Ex Machina item info"); },
        title: "Ex Machina",
        info1: "Sunday, October 15th 4:00pm",
        info2: "Scotiabank Theatre Chinook - 6455 Macleod Trail SW",
        info3: "",
        picture: ex_machina
    };

    const items = [itemInfoStampeders,itemInfoCalaway,itemInfoExMachina]

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
                { value: 'option1', label: 'All' },
                { value: 'option2', label: 'Nearby' },
                { value: 'option3', label: 'Top Rated' },
                { value: 'option4', label: 'Popular' },
                ]}
                onChange={(selectedOption) => {
                 console.log('Selected option:', selectedOption);
                 // Need to add logic here
                }}
              />
              <SearchBar placeholder="Search for events..." onSearch={handleSearch} />
              <Browse items={items} height={"520px"} />
            </div>
        </div>
      );
}

export default BrowseEvents