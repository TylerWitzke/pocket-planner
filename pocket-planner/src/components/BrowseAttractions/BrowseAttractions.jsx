import React from 'react'

import './BrowseAttractions.css';  // Import the CSS file
import calgary_stampeders from '../assets/stampeders_logo.png'
import calaway_attraction from '../assets/calaway_attraction.jpg'
import ex_machina from '../assets/ex_machina.jpg'
import SearchBar from '../SearchBar/SearchBar';
import Browse from '../Browse/Browse';

const BrowseAttractions = () => {
    const itemInfoStampeders = {
        onClick: () => { console.log("Navigate to Stampeders item info"); },
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
            <a href="#" onClick={()=>{console.log("Go back")}}>
                Back
            </a>
            <div className="browse-attraction-container">
              {/* Header */}
              <h2>Attractions</h2>

              {/* Search Bar */}
              <SearchBar placeholder="Search..." onSearch={handleSearch} />

              <h2>Browse Example</h2>
              <Browse items={items} height={"200px"} />

            </div>
        </div>
      );
}

export default BrowseAttractions