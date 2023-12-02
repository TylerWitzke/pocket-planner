// AttractionItemScreen.jsx

import React from 'react';
import AttractionItem from '../AttractionItem/AttractionItem';
import GeneralButton from '../GeneralButton/GeneralButton';  
import './AttractionItemScreen.css';
import blue_ring_attraction from '../assets/blue_ring_attraction.jpg'
import { useNavigate } from 'react-router'
import { attraction_items_info } from '../../Constants';
import { useLocation } from 'react-router-dom';


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

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const index = queryParams.get('attractionid');
    const redirectBack = () => {
        navigate(-1);
    };

    const redirectToItinerary = () => {
        navigate('/additem?itemid='+index);
    };


  return (
    <div>
    <a href="#" onClick={redirectBack}>
        Back
    </a>
    <div className="attraction-item-screen">
      <AttractionItem {...attraction_items_info[parseInt(index, 10)]} />
      <GeneralButton label="Add to Itinerary" onClick={redirectToItinerary} paddingBottom="5px" paddingTop="5px" />
    </div>
    </div>
  );
};

export default AttractionItemScreen;
