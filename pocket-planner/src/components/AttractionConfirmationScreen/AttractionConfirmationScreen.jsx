// AttractionConfirmationScreen.jsx

import React from 'react';
import GeneralButton from '../GeneralButton/GeneralButton';  // Import the GeneralButton component
import './AttractionConfirmationScreen.css';  // Import the CSS file
import ItemSuccess from '../ItemSuccess/ItemSuccess';  // Import the Item component
import blue_ring_attraction from '../assets/blue_ring_attraction.jpg'
import Item from '../Item/Item';  // Import the Item component
import { attraction_items } from '../../Constants';
import { expday } from '../AddItem/AddItem';

const AttractionConfirmationScreen = ({ onEditDetails, onDeleteItem, onBackToMainMenu }) => {

    const itemInfoRing = {
        title: "Big Blue Ring",
        info1: "“Art” Piece - 16 km",
        info2: "Open 24 Hours",
        info3: "",
        picture: blue_ring_attraction
      };

  return (
    <div>
    <a href="#" onClick={()=>{console.log("Go back")}}>
        Back
    </a>
    <div className="attraction-confirmation-screen-container">

      <Item {...itemInfoRing} />
      <div className='item-success-container-style'>
        <div className='item-success-text-content-style'>
          <h2 className='item-success-title-style'>
          Success! You have added Big Blue Ring  to your itinerary for 9:41am on {expday} February 15th for 15 minutes. 
          </h2>
        </div>
      </div>
      {/* Include GeneralButton components */}
      <GeneralButton label="Edit details" onClick={()=>{console.log("Go back")}} paddingBottom="10px" paddingTop="10px" />
      <GeneralButton label="Delete this item" onClick={()=>{console.log("Go back")}} paddingBottom="10px" paddingTop="10px" />
      <GeneralButton label="Back to Main Menu" onClick={()=>{console.log("Go back")}} paddingBottom="10px" paddingTop="10px"/>

    </div>
    </div>
  );
};

export default AttractionConfirmationScreen;