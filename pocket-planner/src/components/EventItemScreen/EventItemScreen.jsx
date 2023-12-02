import React from 'react';
import GeneralButton from '../GeneralButton/GeneralButton';
import './EventItemScreen.css';
import calgaryflamescanucks from '../assets/calgaryflamescanucks.png';
import EventItem from '../EventItem/EventItem';
import { useLocation } from 'react-router-dom';

const EventItemScreen = ({ onAddToItinerary }) => {
  const itemInfoItinerary = {
    title: 'Calgary Flames', 
    picture: calgaryflamescanucks,
    date: 'Tuesday, October 24th 7:30pm',
    location: 'Scotiabank Saddledome',
  };

  const itemInfoItinerary2 = {
    title: 'Calgary Hitmen', 
    picture: calgaryflamescanucks,
    date: 'Tuesday, October 24th 7:30pm',
    location: 'Scotiabank Saddledome',
  };

  const items = [itemInfoItinerary, itemInfoItinerary2]

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const index = queryParams.get('eventid');

  return (
    <div >
        <a href="#" onClick={()=>{console.log("Go back")}}>
        Back
        </a>
        <div className="event-item-screen">
            <EventItem {...items[parseInt(index, 10)]} />
            <GeneralButton label="Add To Itinerary" onClick={onAddToItinerary} paddingBottom="10px" paddingTop="10px" />
        </div>
    </div>
  );
};

export default EventItemScreen;

