// BrowseItinerary.jsx

import React from 'react';
import GeneralButton from '../GeneralButton/GeneralButton';  // Import the GeneralButton component
import Item from '../Item/Item';  // Import the Item component
import Browse from '../Browse/Browse';  // Import the Browse component
import './BrowseItinerary.css';  // Import the CSS file
import calgary_stampeders from '../assets/calgary_stampeders.png'
import calaway_attraction from '../assets/calaway_attraction.jpg'
import ex_machina from '../assets/ex_machina.jpg'

const BrowseItinerary = ({ onViewInCalendar }) => {

    const itemInfoStampeders = {
        title: "Calgary Stampeders",
        info1: "Saturday, October 14th 7:30pm",
        info2: "McMahon Stadium - 1817 Crowchild Trail NW",
        info3: "",
        picture: calgary_stampeders
      };


    const itemInfoCalaway = {
        title: "Calaway Park",
        info1: "Sunday, October 15th 9:30am",
        info2: "Calaway Park - 245033 Range Rd 33",
        info3: "",
        picture: calaway_attraction
      };

    const itemInfoExMachina = {
        title: "Ex Machina",
        info1: "Sunday, October 15th 4:00pm",
        info2: "Scotiabank Theatre Chinook - 6455 Macleod Trail SW",
        info3: "",
        picture: ex_machina
      };

  return (
    <div>
        <a href="#" onClick={()=>{console.log("Go back")}}>
            Back
        </a>
        <div className="browse-itinerary-container">
          {/* Header */}
          <h2 className="itinerary-header">Itinerary</h2>

          {/* Up Next subheading */}
          <h3 className="itinerary-subheading">Up Next:</h3>
          <Item {...itemInfoStampeders} />

          {/* Later subheading */}
          <h3 className="itinerary-subheading">Later:</h3>
          <Item {...itemInfoCalaway} />
          <Item {...itemInfoExMachina} />
          
          {/* Button to view in calendar */}
          <GeneralButton label="View in Calendar" onClick={onViewInCalendar} paddingBottom="10px" paddingTop="10px" />
        </div>
    </div>
  );
};

export default BrowseItinerary;

