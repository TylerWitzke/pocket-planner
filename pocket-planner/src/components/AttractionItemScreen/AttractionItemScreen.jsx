// AttractionItemScreen.jsx

import React from 'react';
import AttractionItem from '../AttractionItem/AttractionItem';
import GeneralButton from '../GeneralButton/GeneralButton';  
import './AttractionItemScreen.css';
import blue_ring_attraction from '../assets/blue_ring_attraction.jpg'


const AttractionItemScreen = ({ onAddToItinerary }) => {
  const attractionData = {
    title: 'Big Blue Ring',
    picture: blue_ring_attraction,
    description: 'Gorgeous massive blue ring. It only took $471,000 to construct this masterpiece. Referred to as Calgary’s pride and joy by locals.',
    locationName: 'Deerfoot Trail',
    locationDistance: '16 km away',
    contact: '(403)-111-222',
    hours: 'Open 24 hours',
  };


  return (
    <div>
    <a href="#" onClick={()=>{console.log("Go back")}}>
        Back
    </a>
    <div className="attraction-item-screen">
      <AttractionItem {...attractionData} />
      <GeneralButton label="Add to Itinerary" onClick={onAddToItinerary} paddingBottom="5px" paddingTop="5px" />
    </div>
    </div>
  );
};

export default AttractionItemScreen;
