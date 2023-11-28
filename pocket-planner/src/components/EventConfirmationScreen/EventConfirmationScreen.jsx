// EventConfirmationScreen.jsx

import React from 'react';
import GeneralButton from '../GeneralButton/GeneralButton';  // Import the GeneralButton component
import './EventConfirmationScreen.css';  // Import the CSS file
import ItemSuccess from '../ItemSuccess/ItemSuccess';  // Import the Item component
import calgary_flames from '../assets/calgary_flames.png'
import Item from '../Item/Item';  // Import the Item component

const EventConfirmationScreen = ({ onEditDetails, onDeleteItem, onBackToMainMenu }) => {

    const itemInfoFlames = {
        title: "Calgary Flames",
        info1: "vs Vancouver Canucks",
        info2: "Tuesday, October 24th 7:30pm",
        info3: "Scotiabank Saddledome",
        picture: calgary_flames
      };

  return (
    <div>
    <a href="#" onClick={()=>{console.log("Go back")}}>
        Back
    </a>
    <div className="event-confirmation-screen-container">

      <Item {...itemInfoFlames} />
      <div className='item-success-container-style'>
        <div className='item-success-text-content-style'>
          <h2 className='item-success-title-style'>
            Success! You have added Calgary Flames vs Vancouver Canucks to your itinerary for 7:30 on Tuesday October 24th at Scotiabank Saddledome.
          </h2>
        </div>
        
      </div>
      {/* Include GeneralButton components */}
      <GeneralButton label="Edit details" onClick={onEditDetails} paddingBottom="10px" paddingTop="10px" />
      <GeneralButton label="Delete this item" onClick={onDeleteItem} paddingBottom="10px" paddingTop="10px" />
      <GeneralButton label="Back to Main Menu" onClick={onBackToMainMenu} paddingBottom="10px" paddingTop="10px"/>

    </div>
    </div>
  );
};

export default EventConfirmationScreen;

