import React from 'react';
import GeneralButton from '../GeneralButton/GeneralButton';
import './EventItemScreen.css';
import calgaryflamescanucks from '../assets/calgaryflamescanucks.png';
import EventItem from '../EventItem/EventItem';

const EventItemScreen = ({ onAddToItinerary }) => {
  const itemInfoItinerary = {
    title: 'Calgary Flames', 
    picture: calgaryflamescanucks,
    date: 'Tuesday, October 24th 7:30pm',
    location: 'Scotiabank Saddledome',
  };

  return (
    <div >
        <a href="#" onClick={()=>{console.log("Go back")}}>
        Back
        </a>
        <div className="event-item-screen">
            <EventItem {...itemInfoItinerary} />
            <GeneralButton label="Add To Itinerary" onClick={onAddToItinerary} paddingBottom="10px" paddingTop="10px" />
        </div>
    </div>
  );
};

export default EventItemScreen;

